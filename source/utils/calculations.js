import {OPERATORS, INITIAL_STATE} from './constants';
import {isOperator, isOperationInProgress} from './validations';

export const handleOperation = (
  currentValue,
  calculatorValue,
  operatorValue,
  clearOnNextKeyPress,
) => {
  if (!isOperator(currentValue)) {
    let valueObj = {};
    if (operatorValue.isCurrent) {
      valueObj = {
        current: currentValue,
        previous: calculatorValue.current,
      };
    } else {
      valueObj = {
        current:
          calculatorValue.current === '0' || clearOnNextKeyPress
            ? currentValue + ''
            : calculatorValue.current + currentValue,
        previous: calculatorValue.current,
      };
    }
    const operatorObj = {...operatorValue, isCurrent: false};
    return {operatorObj, valueObj};
  } else {
    return applyOperator(currentValue, calculatorValue, operatorValue);
  }
};

function applyOperator(currentValue, calculatorValue, operatorValue) {
  let operatorObj = INITIAL_STATE.operatorObj;
  let initialValueObj = INITIAL_STATE.initialValueObj;

  let valueObj = calculatorValue;

  if (isOperationInProgress(currentValue, calculatorValue, operatorValue)) {
    valueObj.current = operatorValue.func(
      calculatorValue.previous,
      calculatorValue.current,
    );
    valueObj.previous = '0';
  }

  switch (currentValue) {
    case OPERATORS.CLEAR:
      valueObj = initialValueObj;
      break;
    case OPERATORS.SIGN:
      valueObj.current = calculatorValue.current * -1;
      valueObj.previous = '0';
      break;
    case OPERATORS.PERCENT:
      valueObj.current = calculatorValue.current / 100;
      break;
    case OPERATORS.EQUALS:
      valueObj.current = operatorValue.func(
        calculatorValue.previous,
        calculatorValue.current,
      );
      valueObj.previous = '0';
      break;
    case OPERATORS.DIVIDE:
      operatorObj = {isCurrent: true, value: '/', func: divide};
      break;
    case OPERATORS.MULTIPLY:
      operatorObj = {isCurrent: true, value: '*', func: multiply};
      break;
    case OPERATORS.MINUS:
      operatorObj = {isCurrent: true, value: '-', func: minus};
      break;
    case OPERATORS.PLUS:
      operatorObj = {isCurrent: true, value: '+', func: plus};
      break;
  }

  return {operatorObj, valueObj};
}

const divide = (operand1, operand2) => {
  return (Number(operand1) / Number(operand2)).toString();
};

const multiply = (operand1, operand2) => {
  return (Number(operand1) * Number(operand2)).toString();
};

const minus = (operand1, operand2) => {
  return (Number(operand1) - Number(operand2)).toString();
};

const plus = (operand1, operand2) => {
  return (Number(operand1) + Number(operand2)).toString();
};

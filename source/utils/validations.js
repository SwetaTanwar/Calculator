import {OPERATORS} from './constants';

export const isOperator = opr => Object.values(OPERATORS).includes(opr);

export const isOperationInProgress = (
  currentValue,
  calculatorValue,
  operatorValue,
) => {
  return (
    calculatorValue.previous !== '0' &&
    calculatorValue.current !== '0' &&
    operatorValue.func !== null &&
    !['C', '=', '+/-'].includes(currentValue)
  );
};

import { OPERATORS } from "./constants";
import { isOperator } from "./validations";

export const handleOperation = (currentValue, calculatorValue, operatorValue) => {

  if (!isOperator(currentValue)) {
    const value = calculatorValue + currentValue + ''
    const operatorObj = { isCurrent: false, value: operatorValue.value }
    return {operatorObj, value}
  } else {
    return applyOperator(currentValue, calculatorValue, operatorValue)
  }
}

function applyOperator (currentValue, calculatorValue, operatorValue) {
  let operatorObj = { isCurrent: false, value: null }
  let value =  ''

  switch(currentValue) {
    case OPERATORS.CLEAR:
      break
    case OPERATORS.SIGN:
      value = calculatorValue * -1
      break
    case OPERATORS.PERCENT:
      value = calculatorValue / 100
      break
  }

  return { operatorObj, value }
}

import { OPERATORS } from "./constants";
import { isOperator } from "./validations";

export const handleOperation = (text, calculatorValue, operatorValue) => {
  const operator = operatorValue.value
  let operatorObj = {}
  let value =  ''

  if (!isOperator(text)) {
    value = calculatorValue + text + ''
    operatorObj = { isCurrent: false, value: operator }
  } else if (operator === OPERATORS.CLEAR) {
    operatorObj = { isCurrent: false, value: null }
  }

  return {operatorObj, value}
}

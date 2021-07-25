import React, { useState } from "react";
import { View } from "react-native";

import { Styles } from "../utils/styles";
import CalculatorRow from "../components/calculatorRow";
import { isOperator } from "../utils/validations";
import CalculatorInput from "../components/calculatorInput";
import { CalculatorContext } from "../context";

export default function Calc () {

  const [calculatorValue, setCalculatorValue] = useState('')
  const [operator, setOperator] = useState({ isCurrent: false, value: null })

  return <CalculatorContext.Provider value={{ operator, updateValues }}>
    <View style={Styles.container}>
      <CalculatorInput value={calculatorValue}/>
      <View style={Styles.container}>
        <CalculatorRow btn1={'C'} btn2={'+/-'} btn3={'%'} btn4={'/'} isTop={true} />
        <CalculatorRow btn1={'7'} btn2={'8'} btn3={'9'} btn4={'*'} />
        <CalculatorRow btn1={'4'} btn2={'5'} btn3={'6'} btn4={'-'} />
        <CalculatorRow btn1={'1'} btn2={'2'} btn3={'3'} btn4={'+'} />
        <CalculatorRow btn1={'0'} btn3={'.'} btn4={'='} />
      </View>
    </View>
  </CalculatorContext.Provider>

  function updateValues (text) {
    const updatedText = calculatorValue + text + ''
    if (isOperator(text)) {
      setOperator({isCurrent: true, value: text})
    } else {
      setCalculatorValue(updatedText)
      setOperator(prevValue => ({...prevValue, isCurrent: false}))
    }
  }
}

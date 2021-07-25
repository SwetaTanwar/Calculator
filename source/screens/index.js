import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Styles } from "../utils/styles";
import CalculatorRow from "../components/calculatorRow";

export default function Calc () {
  const [value, setValue] = useState('0')

  return <View style={Styles.container}>
    <View style={Styles.topContainer}>
      <TextInput placeholder={'0'} value={value} style={Styles.textInput}/>
    </View>
    <View style={Styles.container}>
      <CalculatorRow btn1={'C'} btn2={'+/-'} btn3={'%'} btn4={'/'} isTop={true}/>
      <CalculatorRow btn1={'7'} btn2={'8'} btn3={'9'} btn4={'*'}/>
      <CalculatorRow btn1={'4'} btn2={'5'} btn3={'6'} btn4={'-'}/>
      <CalculatorRow btn1={'1'} btn2={'2'} btn3={'3'} btn4={'+'}/>
      <CalculatorRow btn1={'0'} btn3={'.'} btn4={'='}/>
    </View>
  </View>
}

import React from "react";
import { View } from "react-native";

import { Styles } from "../../utils/styles";
import CalculatorButton from "../calculatorButton";

export default function CalculatorRow ({btn1, btn2, btn3, btn4, isTop = false, onPress}) {
  return <View style={Styles.rowContainer}>
    <CalculatorButton item={btn1} isTop={isTop} mergeBtn={!btn2} onPress={onPress}/>
    <CalculatorButton item={btn2} isTop={isTop} onPress={onPress}/>
    <CalculatorButton item={btn3} isTop={isTop} onPress={onPress}/>
    <CalculatorButton item={btn4} isLast={true} onPress={onPress}/>
  </View>
}

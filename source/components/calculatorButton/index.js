import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Styles } from "../../utils/styles";
import { CalculatorContext } from "../../context";

export default function CalculatorButton ({item, isTop = false, isLast = false, mergeBtn = false}) {
  const { updateValues: onPress, operator } = useContext(CalculatorContext)

  const isSelected = operator.value === item && operator.isCurrent

  const bgColor = isTop
    ? Styles.topBgColor
    : isLast
      ? isSelected ? Styles.selectedBgColor
        : Styles.lastBgColor
      : Styles.btnBgColor

  const textColor = isTop && !isLast
    ? Styles.darkTextColor
    : isLast && isSelected
      ? Styles.selectedTextColor
      : Styles.lightTextColor

  return item ? <View style={Styles.buttonContainer}>
    <TouchableOpacity
      style={[Styles.buttonInnerContainer, bgColor, mergeBtn && Styles.doubleWidthContainer]}
      onPress={onItemPress}>
      <Text style={[Styles.buttonText, textColor]}>{item}</Text>
    </TouchableOpacity>
  </View> : null

  function onItemPress () {
    onPress(item)
  }
}

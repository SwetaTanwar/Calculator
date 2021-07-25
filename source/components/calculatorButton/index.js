import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Styles } from "../../utils/styles";

export default function CalculatorButton ({item, isTop = false, isLast = false, mergeBtn = false,  onPress}) {
  const bgColor = isTop ? Styles.topBgColor : isLast ? Styles.lastBgColor : Styles.btnBgColor
  const textColor = isTop && !isLast ? Styles.darkTextColor : Styles.lightTextColor

  return item ? <View style={Styles.buttonContainer}>
    <TouchableOpacity style={[Styles.buttonInnerContainer, bgColor, mergeBtn && Styles.doubleWidthContainer]} onPress={onItemPress}>
      <Text style={[Styles.buttonText, textColor]}>{item}</Text>
    </TouchableOpacity>
  </View> : null

  function onItemPress () {
    onPress(item)
  }
}

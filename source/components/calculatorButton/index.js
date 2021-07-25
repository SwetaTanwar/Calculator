import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../../utils/styles";

export default function CalculatorButton ({item, isTop = false, isLast = false, mergeBtn = false}) {
  const bgColor = isTop ? Styles.topBgColor : isLast ? Styles.lastBgColor : Styles.btnBgColor
  const textColor = isTop && !isLast ? Styles.darkTextColor : Styles.lightTextColor

  return item ? <View style={Styles.buttonContainer}>
    <View style={[Styles.buttonInnerContainer, bgColor, mergeBtn && Styles.doubleWidthContainer]}>
      <Text style={[Styles.buttonText, textColor]}>{item}</Text>
    </View>
  </View> : null
}

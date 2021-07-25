import React from "react";
import { Text, View } from "react-native";

import { Styles } from "../../utils/styles";

export default function CalculatorInput ({value}) {
  return <View style={Styles.topContainer}>
    <Text style={Styles.textStyle}>{value}</Text>
  </View>
}

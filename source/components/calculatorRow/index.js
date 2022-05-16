import React from 'react';
import {View} from 'react-native';

import {Styles} from '../../utils/styles';
import CalculatorButton from '../calculatorButton';

export default function CalculatorRow({btn1, btn2, btn3, btn4, isTop = false}) {
  return (
    <View style={Styles.rowContainer}>
      <CalculatorButton item={btn1} isTop={isTop} mergeBtn={!btn2} />
      <CalculatorButton item={btn2} isTop={isTop} />
      <CalculatorButton item={btn3} isTop={isTop} />
      <CalculatorButton item={btn4} isLast={true} />
    </View>
  );
}

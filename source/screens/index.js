import React, {useState} from 'react';
import {View} from 'react-native';

import {CalculatorContext} from '../context';

import CalculatorRow from '../components/calculatorRow';
import CalculatorInput from '../components/calculatorInput';

import {Styles} from '../utils/styles';

import {handleOperation} from '../utils/calculations';

export default function Calc() {
  const [calculatorValue, setCalculatorValue] = useState({
    current: '0',
    previous: '0',
  });
  const [operatorValue, setOperatorValue] = useState({
    isCurrent: false,
    value: null,
    func: null,
  });

  return (
    <CalculatorContext.Provider
      value={{operator: operatorValue, updateValues: handleItemPress}}>
      <View style={Styles.container}>
        <CalculatorInput value={calculatorValue.current} />
        <View style={Styles.container}>
          <CalculatorRow
            btn1={'C'}
            btn2={'+/-'}
            btn3={'%'}
            btn4={'/'}
            isTop={true}
          />
          <CalculatorRow btn1={'7'} btn2={'8'} btn3={'9'} btn4={'*'} />
          <CalculatorRow btn1={'4'} btn2={'5'} btn3={'6'} btn4={'-'} />
          <CalculatorRow btn1={'1'} btn2={'2'} btn3={'3'} btn4={'+'} />
          <CalculatorRow btn1={'0'} btn3={'.'} btn4={'='} />
        </View>
      </View>
    </CalculatorContext.Provider>
  );

  function handleItemPress(text) {
    const {operatorObj, valueObj} = handleOperation(
      text,
      calculatorValue,
      operatorValue,
    );

    setCalculatorValue({...valueObj});
    setOperatorValue({...operatorObj});
  }
}

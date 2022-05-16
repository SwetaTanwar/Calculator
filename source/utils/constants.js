import {Dimensions} from 'react-native';

export const OPERATORS = {
  CLEAR: 'C',
  SIGN: '+/-',
  PERCENT: '%',
  DIVIDE: '/',
  MULTIPLY: '*',
  MINUS: '-',
  PLUS: '+',
  EQUALS: '=',
};

export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const INITIAL_STATE = {
  operatorObj: {isCurrent: false, value: null, func: null},
  initialValueObj: {current: '0', previous: '0'},
};

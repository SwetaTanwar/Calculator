import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from './constants';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: '35%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 16,
  },
  textStyle: {
    width: '100%',
    textAlign: 'right',
    fontSize: 30,
    color: 'white',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    paddingTop: 8,
  },
  buttonInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SCREEN_WIDTH / 4.3,
    width: SCREEN_WIDTH / 4.3,
    height: SCREEN_WIDTH / 4.3,
  },
  doubleWidthContainer: {
    width: (SCREEN_WIDTH / 4.2) * 2,
  },
  topBgColor: {
    backgroundColor: 'lightgray',
  },
  lastBgColor: {
    backgroundColor: 'orange',
  },
  btnBgColor: {
    backgroundColor: 'gray',
  },
  selectedBgColor: {
    backgroundColor: 'white',
  },
  darkTextColor: {
    color: 'black',
  },
  lightTextColor: {
    color: 'white',
  },
  selectedTextColor: {
    color: 'orange',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

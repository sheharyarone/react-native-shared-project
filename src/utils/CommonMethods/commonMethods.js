import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export function wp(value) {
  return widthPercentageToDP(value);
}
export function hp(value) {
  return heightPercentageToDP(value);
}

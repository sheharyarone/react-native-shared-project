import {StyleSheet, Platform} from 'react-native';
import colors from '../../../assets/Colors/color';
import {hp, wp} from '../../../utils/CommonMethods/commonMethods';
import fonts from '../../../assets/Fonts/fonts';
import fontFamily from '../../../assets/Fonts/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  logoContainer: {
    minHeight: hp(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoHeading: {
    minHeight: hp(8),
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: wp(90),
    marginLeft: wp(5),
  },
  headingText: {
    color: colors.textColor,
    fontSize: fonts.H5,
    marginLeft: wp(0.5),
    fontFamily: fontFamily.sofia_bold,
  },
  subHeadingText: {
    color: colors.textColor,
    fontWeight: '400',
    fontSize: fonts.H9,
    marginLeft: wp(0.5),
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: Platform.OS === 'ios' ? hp(45) : hp(55),
    paddingTop: hp(2),
  },
  forgotContainer: {
    width: wp(90),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  forgotText: {
    color: colors.inputTextColor,
    fontWeight: '400',
    fontSize: fonts.H9,
  },
  dontAccountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: Platform.OS === 'ios' ? hp(10) : hp(12),
  },
  dontAccountText: {
    color: colors.donthaveAccountText,
    fontWeight: '400',
    fontSize: fonts.H9,
  },
  signUpText: {
    fontWeight: '400',
    fontSize: fonts.H9,
    color: colors.inputTextColor,
  },
  phoneFieldContainer: {
    width: '90%',
    borderRadius: 10,
    marginTop: '2.5%',
    marginBottom: '2%',
    borderColor: colors.inputColor,
    borderWidth: 1,
  },
  phoneNoTextCon: {
    paddingVertical: Platform.OS === 'android' ? hp(0.15) : hp(1.4),
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.inputColor,
  },
  phoneNoInputcon: {
    backgroundColor: colors.inputColor,
    // paddingVertical: Platform.OS === 'android' ? hp(1.15) : hp(0.15),
  },
  codeTextStyle: {
    paddingVertical: Platform.OS === 'android' ? hp(0.15) : hp(0.15),
  },
});

export default styles;

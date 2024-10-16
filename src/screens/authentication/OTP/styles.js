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
  headerContainer: {
    ...Platform.select({
      android: {
        paddingTop: hp(3),
      },
      ios: {
        paddingBottom: hp(1),
      },
    }),
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

  underlineStyleBase: {
    width: wp(14),
    height: hp(7.5),
    marginLeft: '2%',
    fontSize: hp(2.3),
    fontWeight: 'bold',
    borderColor: '#007eb2',
    borderWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    color: colors.inputTextColor,
  },
  input: {
    width: wp(90),
    height: hp(12),
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#007eb2',
  },
  reSendOTPContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: hp(2),
    width: wp(87),
  },
  reSendText: {
    color: colors.inputTextColor,
    fontWeight: '500',
    fontSize: fonts.H9,
  },
});

export default styles;

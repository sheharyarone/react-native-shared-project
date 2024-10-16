import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Platform,
  ActivityIndicator,
} from 'react-native';
import colors from '../assets/Colors/color';
import fonts from '../assets/Fonts/fonts';
import {hp, wp} from '../utils/CommonMethods/commonMethods';
import SvgComponent from './SvgCustomComponents/svgCustomComponents';
import LinearGradient from 'react-native-linear-gradient';
function AppButton({
  marginTop,
  title,
  backgroundColor = colors.primary,
  onPress,
  navigation,
  titleColor = colors.WHITE,
  loading = false,
  disabled = false,
  borderColor,
  IconName,
  width = wp(90),
  svgIcon,
  fontWeight = 'bold',
  borderWidth,
  borderRadius = 10,
  height,
  padding = Platform.OS === 'android' ? hp(2) : hp(1.7),
  buttonContainerProps,
  textStyleProps,
  dingerButton,
}) {
  let text = {
    fontSize: fonts.H8,
    fontWeight: 'bold',
    color: titleColor,
    marginLeft: svgIcon ? '2%' : 0,
  };
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <LinearGradient
        colors={dingerButton ? ['#A82222', '#FF2525'] : ['#02457A', '#018ABE']}
        start={{x: 0, y: 0}} // gradient start position
        end={{x: 1, y: 0}}
        style={[
          styles.button,
          {
            backgroundColor: backgroundColor,
            marginTop: marginTop,
            borderColor: borderColor,
            width: width,
            borderWidth: borderWidth,
            borderColor: borderColor,
            borderRadius: borderRadius,
            height: height,
            padding: padding,
          },
          {...buttonContainerProps},
        ]}>
        {loading ? (
          <ActivityIndicator
            size={'small'}
            animating={loading}
            color={colors.WHITE}
          />
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {svgIcon && <SvgComponent svgMarkup={svgIcon} />}
            <Text style={[text, {...textStyleProps}]}>{title}</Text>
            {/* {IconName && <Icon name={IconName} size={25} />} */}
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.OS === 'android' ? hp(1.7) : hp(10),
    marginVertical: hp(1.2),
    alignSelf: 'center',
  },
});

export default AppButton;

import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import SvgComponent from '../SvgCustomComponents/svgCustomComponents';
import colors from '../../assets/Colors/color';
import {hp, wp} from '../../utils/CommonMethods/commonMethods';

function AppTextInput({
  leftIcon,
  rightIcon,
  floatingLabel,
  changeIconLibrary = false,
  width = wp(96),
  backgroundColor = colors.inputColor,
  placeholderTextColor = colors.placeHolderColor,
  changeinputField,
  top = 4,
  marginRight = 0,
  editable,
  leftSvgIcon,
  textcolor = colors.BLACK,
  rightSvgIcon,
  onRightIconPress,
  borderWidth,
  borderColor = colors.inputColor,
  borderRadius = 15,
  paddingRight,
  padding = Platform.OS === 'android' ? hp(1.5) : hp(1.7),
  maxLengthShow,
  inputLength,
  ...otherProps
}) {
  return (
    <>
      {floatingLabel && (
        <View style={styles.floatingLabelContainer}>
          <Text style={styles.floatingLabel}>{floatingLabel}</Text>
        </View>
      )}
      <View
        style={[
          styles.container,
          {
            width,
            backgroundColor: backgroundColor,
            borderWidth: borderWidth ? borderWidth : 0.6,
            borderColor: borderColor,
            borderRadius: borderRadius,
          },
        ]}>
        {leftSvgIcon && (
          <View
            style={{
              marginLeft: '3%',
              alignSelf: 'center',
            }}>
            <SvgComponent svgMarkup={leftSvgIcon} />
          </View>
        )}

        <TextInput
          editable={editable}
          placeholderTextColor={placeholderTextColor}
          style={[
            // defaultStyles.text,
            {
              paddingRight: paddingRight,
              padding: padding,
              marginRight: marginRight,
              width: rightSvgIcon ? '88%' : '93%',
              textAlign: 'justify',
              color: textcolor,
              marginLeft: '1.5%',
              backgroundColor: colors.inputColor,
            },
          ]}
          {...otherProps}
        />
        {maxLengthShow && (
          <Text
            style={{
              marginTop: 110,
              right: 40,
              paddingTop: 10,
              color: textcolor,
            }}>{`${inputLength}/500`}</Text>
        )}
        {rightSvgIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={{
              flex: 1,
              alignItems: 'flex-end',
              // height: '100%',
              justifyContent: 'center',

              ...Platform.select({
                android: {
                  marginRight: '2%',
                },
              }),

              marginRight: '3%',
            }}>
            <SvgComponent svgMarkup={rightSvgIcon} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',

    ...Platform.select({
      ios: {
        // padding: hp(1.7),
      },
      android: {
        // padding: hp(0.1),
      },
    }),
    marginVertical: 10,
    borderColor: colors.inputColor,
    backgroundColor: colors.WHITE,
  },
  icon: {
    marginRight: 10,
  },
  floatingLabelContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
    left: 20,
    top: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingLabel: {
    textAlign: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    color: colors.primaryColor,
    fontWeight: '600',
  },
});

export default AppTextInput;

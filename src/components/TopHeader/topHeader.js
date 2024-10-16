import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {hp, wp} from '../../utils/CommonMethods/commonMethods';
import colors from '../../../src/assets/Colors/color';
import fonts from '../../assets/Fonts/fonts';
import SvgComponent from '../SvgCustomComponents/svgCustomComponents';
import fontFamily from '../../assets/Fonts/fontFamily';
import {useSelector} from 'react-redux';

const ToPHeader = ({
  lefIcon,
  title,
  voiceIcon,
  voiceIconRight,
  bellIcon,
  rightIcon,
  onRightIconPress,
  titleColor = colors.textColor,
  onLeftIconPress,
  oneRightIconPress,
  onPressVoice,
  userImage,
  bellIconPress,
  logoutIcon,
  logoutIconPress,
  chatProps,
  chatPropsPress,
  statusUser,
  statusColor,
  chatPropsIcon,
  chatPropsIconPress,
  textShow,
  textShowColor,
  editTextPress,
  loading = false,
}) => {
  const drunkValue = useSelector(state => state?.userDetails?.drunkColor);
  const borderColor =
    drunkValue === true
      ? 'red'
      : drunkValue == 1
      ? 'red'
      : colors.inputTextColor;
  return (
    <SafeAreaView style={styles.container}>
      {lefIcon && (
        <TouchableOpacity
          style={styles.leftIconContainer}
          onPress={onLeftIconPress}>
          <SvgComponent svgMarkup={lefIcon} />
        </TouchableOpacity>
      )}

      {chatProps && (
        <TouchableOpacity
          style={[styles.rightIconSvgStyle, {width: wp(13)}]}
          onPress={chatPropsPress}>
          <Image
            style={[styles.userImageStyle, {width: 35, height: 35}]}
            source={{uri: chatProps}}
          />
        </TouchableOpacity>
      )}
      {chatPropsIcon && (
        <View
          style={[
            styles.rightIconContainer,
            {width: chatPropsIcon ? wp(13) : wp(18)},
          ]}>
          <TouchableOpacity
            style={styles.rightIconSvgStyle}
            onPress={chatPropsIconPress}>
            <SvgComponent svgMarkup={chatPropsIcon} />
          </TouchableOpacity>
        </View>
      )}
      {title && (
        <View
          style={[
            styles.titleContainer,
            {
              width: !lefIcon
                ? wp(62)
                : !voiceIcon && !bellIcon
                ? wp(70)
                : !voiceIcon
                ? wp(60)
                : !bellIcon
                ? wp(60)
                : wp(50),
            },
          ]}>
          <Text
            style={[
              styles.titleStyle,
              {
                marginLeft: !lefIcon ? wp(5) : wp(0),
                color: titleColor,
              },
            ]}>
            {title}
          </Text>
          {statusUser && (
            <Text style={[styles.statusUserStyle, {color: statusColor}]}>
              {statusUser}
            </Text>
          )}
        </View>
      )}
      {voiceIcon && (
        <TouchableOpacity
          style={[
            styles.voiceIconConatiner,
            {width: chatProps ? wp(11) : wp(10), right: voiceIconRight},
          ]}
          onPress={onPressVoice}>
          <SvgComponent svgMarkup={voiceIcon} />
        </TouchableOpacity>
      )}
      {loading ? (
        <ActivityIndicator
          size={'small'}
          animating={loading}
          color={colors.BLACK}
        />
      ) : (
        <>
          {bellIcon && (
            <TouchableOpacity
              style={[
                styles.bellIconConatiner,
                {width: chatProps ? wp(11) : wp(10)},
              ]}
              onPress={bellIconPress}>
              <SvgComponent svgMarkup={bellIcon} />
            </TouchableOpacity>
          )}
        </>
      )}
      {textShow && (
        <TouchableOpacity
          style={styles.rightIconContainer}
          onPress={editTextPress}>
          <Text
            style={[
              {
                color: colors.textColor,
                fontSize: fonts.H5,
                fontFamily: fontFamily.sofia_bold,
              },
              {color: textShowColor},
            ]}>
            {textShow}
          </Text>
        </TouchableOpacity>
      )}
      {rightIcon && (
        <View style={styles.rightIconContainer}>
          <TouchableOpacity
            style={styles.rightIconSvgStyle}
            onPress={onRightIconPress}>
            <SvgComponent svgMarkup={rightIcon} />
          </TouchableOpacity>
        </View>
      )}
      {userImage && (
        <TouchableOpacity
          style={styles.rightIconSvgStyle}
          onPress={onRightIconPress}>
          <Image
            style={[styles.userImageStyle, {borderColor}]}
            source={{uri: userImage}}
          />
        </TouchableOpacity>
      )}
      {logoutIcon && (
        <View
          style={[
            styles.rightIconSvgStyle,
            {width: wp(35), alignItems: 'flex-end'},
          ]}>
          <TouchableOpacity
            style={[styles.rightIconSvgStyle]}
            onPress={logoutIconPress}>
            <SvgComponent svgMarkup={logoutIcon} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};
export default ToPHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp(100),
    minHeight: Platform.OS == 'ios' ? hp(5) : hp(6),
  },
  leftIconContainer: {
    width: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: wp(50),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleStyle: {
    color: colors.textColor,
    fontSize: fonts.H5,
    fontFamily: fontFamily.sofia_bold,
  },
  voiceIconConatiner: {
    width: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIconConatiner: {
    width: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconContainer: {
    width: wp(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconSvgStyle: {
    width: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImageStyle: {
    borderRadius: 50,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: colors.inputTextColor,
  },
  statusUserStyle: {
    fontSize: 11,
    fontFamily: fontFamily.sofia_regular,
  },
});

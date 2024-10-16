import {ErrorToast, BaseToast} from 'react-native-toast-message';
import React from 'react';
import colors from '../../src/assets/Colors/color';
import {hp} from './CommonMethods/commonMethods';
import {Platform} from 'react-native';

export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      text1Style={{
        fontSize: hp(1.7),
        fontWeight: '700',
        color: colors.success,
      }}
      contentContainerStyle={{
        borderColor: colors.success,
        borderWidth: 0.5,
        borderRadius: 2,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
      }}
      style={{
        borderLeftColor: colors.success,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.success,
        marginTop: Platform.OS === 'ios' ? hp(2) : hp(0),
      }}
      text2Style={{
        fontSize: hp(1.4),
        color: colors.primaryColor,
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: hp(1.7),
        fontWeight: '700',
        color: colors.danger,
      }}
      contentContainerStyle={{
        borderColor: colors.danger,
        borderWidth: 0.5,
        borderRadius: 2,
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
      }}
      style={{
        borderLeftColor: colors.danger,
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: colors.danger,
        marginTop: Platform.OS === 'ios' ? hp(2) : hp(0),
      }}
      text2Style={{
        fontSize: hp(1.4),
        color: colors.danger,
      }}
    />
  ),
  //
  info: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: hp(1.7),
        fontWeight: '500',
        color: colors.inputTextColor,
      }}
      contentContainerStyle={{
        borderColor: colors.inputTextColor,
        borderWidth: 0.5,
        borderRadius: 2,
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
      }}
      style={{
        borderLeftColor: colors.inputTextColor,
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: colors.inputTextColor,
        marginTop: Platform.OS === 'ios' ? hp(2) : hp(0),
      }}
      text2Style={{
        fontSize: hp(1.4),
        color: colors.textColor,
      }}
    />
  ),
  //
  tomatoToast: ({text1, props}) => (
    <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

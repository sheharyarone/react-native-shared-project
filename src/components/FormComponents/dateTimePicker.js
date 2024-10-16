import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import moment, {now} from 'moment';
import DatePicker from 'react-native-date-picker';
import {hp, wp} from '../../utils/CommonMethods/commonMethods';
import colors from '../../assets/Colors/color';
import fonts from '../../assets/Fonts/fonts';
import SvgComponent from '../SvgCustomComponents/svgCustomComponents';
import ValidationErrorMessage from './ValidationErrorMessage';
import {useFormikContext} from 'formik';

const AppDateTimePickerField = ({
  label,
  labelColor,
  name,
  mode,
  rightSvgIcon,
  borderColor = colors.inputColor,
  minimumDate,
  maximumDate,
  defaultValue,
  disabled,
  placeholer,
  width = wp(90),
  widthShow,
  borderRadius = 10,
  borderTopRightRadius,
  borderTopLeftRadius,
  borderBottomEndRadius,
  borderBottomStartRadius,
  // hourFormat,
}) => {
  const {
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    values,
  } = useFormikContext();
  const currentDate = new Date();
  const [openArrivalDateTImeTime, setOpenArrivalDateTImeTime] = useState(false);
  const [arrivalDateTIme, setArrivalDateTIme] = useState('');
  return (
    <View>
      {label ? (
        <Text style={[styles.lableText, {color: labelColor}]}>{label}</Text>
      ) : null}
      <View
        style={[
          styles.inputView,
          {
            borderColor: borderColor,
            width: width,
            borderRadius: borderRadius,
            borderTopRightRadius: borderTopRightRadius,
            borderTopLeftRadius: borderTopLeftRadius,
            borderBottomEndRadius: borderBottomEndRadius,
            borderBottomStartRadius: borderBottomStartRadius,
          },
        ]}>
        <DatePicker
          modal
          mode={mode}
          textColor={colors.primary}
          minimumDate={minimumDate}
          open={openArrivalDateTImeTime}
          date={currentDate}
          maximumDate={maximumDate}
          androidVariant="iosClone"
          is12hourSource="locale"
          onConfirm={date => {
            setFieldValue(
              name,
              mode === 'time'
                ? moment(date).format('HH:mm A')
                : moment(date).format('YYYY-MM-DD'),
            );
            setOpenArrivalDateTImeTime(false);
            setArrivalDateTIme(date);
          }}
          onCancel={() => {
            setOpenArrivalDateTImeTime(false);
          }}
        />
        <TouchableOpacity
          disabled={disabled}
          onBlur={() => setFieldTouched(name)}
          style={[styles.dateView, {width: widthShow}]}
          onPress={() => setOpenArrivalDateTImeTime(true)}>
          <Text style={styles.datePickerText}>
            {arrivalDateTIme ? (
              mode === 'time' ? (
                moment(arrivalDateTIme).format('hh:mm A')
              ) : (
                moment(arrivalDateTIme).format('DD MMM, YYYY')
              )
            ) : defaultValue ? (
              mode === 'time' ? (
                moment(defaultValue).format('hh:mm A')
              ) : (
                moment(defaultValue).format('DD MMM, YYYY')
              )
            ) : (
              <Text style={styles.placeholderText}>{placeholer}</Text>
            )}
          </Text>
        </TouchableOpacity>
        {rightSvgIcon && (
          <TouchableOpacity
            disabled={disabled}
            style={[styles.iconView]}
            onPress={() => setOpenArrivalDateTImeTime(true)}>
            <SvgComponent svgMarkup={rightSvgIcon} />
          </TouchableOpacity>
        )}
      </View>
      <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppDateTimePickerField;

const styles = StyleSheet.create({
  inputView: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: colors.inputColor,
    flexDirection: 'row',
    alignItems: 'center',

    ...Platform.select({
      ios: {
        padding: hp(0.1),
      },
      android: {
        padding: hp(0.3),
      },
    }),
    marginVertical: 10,
  },
  lableText: {
    textAlign: 'left',
    marginLeft: '1%',
    fontWeight: '400',
    fontSize: Platform.OS === 'ios' ? fonts.H6 : fonts.H6,
  },
  datePickerText: {
    color: colors.BLACK,
    left: wp(4),
  },
  placeholderText: {
    color: colors.placeHolderColor,
  },
  dateView: {
    width: '90%',
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: colors.inputColor,
    ...Platform.select({
      ios: {
        height: hp(5.5),
      },
      android: {
        height: hp(6),
      },
    }),
  },
});

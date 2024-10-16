import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {useFormikContext} from 'formik';
import ValidationErrorMessage from './ValidationErrorMessage';
import PhoneInput from 'react-native-phone-number-input';
import fonts from '../../assets/Fonts/fonts';
import colors from '../../assets/Colors/color';
function AppMobileNoInputField({
  name,
  editable,
  width,
  label,
  labelColor = colors.BLACK,
  labelFontFamily = 'Poppins_Medium',
  onRightIconPress,
  borderWidth,
  borderColor,
  borderRadius,
  valid,
  setIsValid,
  placeholder,
  laceholderTextColor,
  formatedMobileNO,
  setFormatedMobileNO,
  defaultValue,
  ref,
  ...otherProps
}) {
  const {
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    resetForm,
    values,
  } = useFormikContext();
  const phoneInput = useRef(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    setFormatedMobileNO(
      phoneInput.current?.getNumberAfterPossiblyEliminatingZero(
        value,
        formattedValue,
      ).formattedNumber,
    );
    setIsValid(phoneInput.current?.isValidNumber(values[name]));
  }, [value, formattedValue]);
  return (
    <View>
      {label && (
        <Text
          style={{
            fontSize: fonts.H7,
            textAlign: 'left',
            marginLeft: '1%',
            fontWeight: '400',
            color: labelColor,
            fontSize: Platform.OS === 'ios' ? fonts.H6 : fonts.H6,
          }}>
          {label}
        </Text>
      )}
      <PhoneInput
        ref={phoneInput}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={values[name]}
        defaultCode="US"
        layout="first"
        textInputProps={{
          onBlur: () => setFieldTouched(name),
          placeholderTextColor: colors.placeHolderColor,
        }}
        flagButtonStyle={{
          backgroundColor: colors.inputColor,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
        onChangeCountry={() => {
          setIsValid(phoneInput.current?.isValidNumber(values[name]));
        }}
        onChangeText={text => {
          setFieldValue(name, text);
          setValue(text);
          setIsValid(phoneInput.current?.isValidNumber(text));
        }}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        {...otherProps}
      />

      <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppMobileNoInputField;

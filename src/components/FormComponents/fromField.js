import React from 'react';
import {View, Text, Platform} from 'react-native';
import {useFormikContext} from 'formik';
import AppTextInput from './textInput';

import ValidationErrorMessage from './ValidationErrorMessage';
import {wp} from '../../utils/CommonMethods/commonMethods';
import colors from '../../assets/Colors/color';
import fonts from '../../assets/Fonts/fonts';

function AppFromField({
  name,
  editable,
  floatingLabel,
  width = wp(90),
  label,
  labelFontFamily = 'Poppins_Medium',
  onRightIconPress,
  borderWidth = 1,
  borderColor = colors.inputColor,
  borderRadius = 10,
  maskInput,
  padding,
  textcolor,
  fontSize = Platform.OS === 'ios' ? fonts.H6 : fonts.H6,
  fontWeight = '400',
  labelColor = colors.textColor,
  marginTop,
  // numberOfLines,
  ...otherProps
}) {
  const {
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    values,
  } = useFormikContext();

  return (
    <View>
      {label && (
        <Text
          style={[
            {
              textAlign: 'left',
              marginLeft: '1%',
              fontWeight: '400',
              color: labelColor,
              fontSize: fonts.H9,
              marginTop: marginTop,
            },
            (fontSize = {fontSize}),
            (fontWeight = {fontWeight}),
          ]}>
          {label}
        </Text>
      )}

      <AppTextInput
        floatingLabel={floatingLabel}
        onRightIconPress={onRightIconPress}
        onBlur={() => setFieldTouched(name)}
        backgroundColor={colors.inputColor}
        onChangeText={text => setFieldValue(name, text)}
        // value={values[name]}
        width={width}
        editable={editable}
        borderWidth={borderWidth}
        borderColor={borderColor}
        borderRadius={borderRadius}
        padding={padding}
        textcolor={textcolor}
        // numberOfLines={numberOfLines}
        {...otherProps}
      />
      <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFromField;

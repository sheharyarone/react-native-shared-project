import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {useFormikContext} from 'formik';
import {hp, wp} from '../../utils/CommonMethods/commonMethods';
import fonts from '../../assets/Fonts/fonts';
import colors from '../../assets/Colors/color';
import ValidationErrorMessage from './ValidationErrorMessage';
import {arrowDwon} from '../../assets/Images/svgImages';
import SvgComponent from '../SvgCustomComponents/svgCustomComponents';
const AppModalField = ({
  name,
  label,
  placeholder,
  schema,
  width = wp(90),
  height,
  disabled,
  data = [],
  value,
  onFocus,
  onBlur,
  onChange,
  labelField,
  valueField,
  onChangeText,
  marginVertical,
  borderColor,
  defaultValue,
  fontSize,
  colorStyle = colors.placeHolderColor,
  search,
  iconColor = colors.inputTextColor,
  selectTextColor = colors.BLACK,
  searchPlaceholder,
  backgroundColor = colors.inputColor,
  labelExtractor,
  lableColor = colors.textColor,
  dropDownBorderRaduis = 10,
  dropdownHight = Platform.OS === 'ios' ? hp(5.6) : hp(6.5),
  marginLeft,
  fontWeight,
  lableFontSize = fonts.H7,
  searchBorderRadius = 10,
  padding,
  marginBottom = hp(0),
  ...props
}) => {
  const {setFieldValue, setFieldTouched, touched, errors, values} =
    useFormikContext();
  useEffect(() => {
    if (value) setFieldValue(name, value);
    else setFieldValue(name, '');
  }, [value]);
  return (
    <View>
      {label && (
        <Text
          style={[
            styles.labelstyle,
            {
              color: lableColor,
              marginLeft: '1%',
              fontWeight: fontWeight,
              fontSize: lableFontSize,
            },
          ]}>
          {label}
        </Text>
      )}
      <TouchableOpacity
        disabled={disabled}
        onBlur={() => setFieldTouched(name)}>
        <Dropdown
          style={[
            styles.dropdown,
            {
              borderColor: 'rgba(84, 87, 91, 0.5)',
              borderWidth: 0.2,
              width: width,
              backgroundColor: backgroundColor,
              borderRadius: dropDownBorderRaduis,
              height: dropdownHight,
              marginBottom: marginBottom,
            },
          ]}
          dropdownTextStyle={styles.dropdownTextStyle}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={[styles.selectedTextStyle, {fontSize: fontSize}]}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          itemTextStyle={{color: colors.textColor}}
          iconColor={'#777777'}
          maxHeight={210}
          borderRadius={hp(1)}
          showsVerticalScrollIndicator={false}
          placeholder={placeholder}
          onBlur={onBlur}
          labelField={labelField}
          valueField={valueField}
          data={data}
          value={value}
          onChangeText={onChangeText}
          onChange={onChange}
          onFocus={onFocus}
          defaultValue={defaultValue}
          renderRightIcon={() => <SvgComponent svgMarkup={arrowDwon} />}
          {...props}
        />
      </TouchableOpacity>
      <View style={{marginVertical: hp(1)}}>
        <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </View>
  );
};

export default AppModalField;

const styles = StyleSheet.create({
  labelstyle: {
    fontWeight: '400',
    textAlign: 'left',
    marginBottom: hp(1.5),
    fontSize: Platform.OS === 'ios' ? fonts.H6 : fonts.H6,
  },
  dropdown: {
    paddingLeft: 8,
    paddingRight: 12,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: fonts.H10,
    fontWeight: '400',
    marginLeft: '3%',
    color: colors.placeHolderColor,
  },
  selectedTextStyle: {
    fontSize: hp(1.6),
    marginLeft: wp(3),
    color: colors.textColor,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  inputSearchStyle: {
    height: 35,
    fontSize: 16,
    padding: 4,
  },
  containerStyle: {
    borderRadius: 10,
    marginTop: hp(0.3),
    height: 160,
    backgroundColor: colors.inputColor,
  },
});

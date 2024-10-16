import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {hp, wp} from '../../../src/utils/CommonMethods/commonMethods';
import colors from '../../../src/assets/Colors/color';
import fonts from '../../assets/Fonts/fonts';
import SvgComponent from '../SvgCustomComponents/svgCustomComponents';
import {arrowDwon} from '../../assets/Images/svgImages';

const DropDown = ({
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
  containerHight = 160,
  ...props
}) => {
  return (
    <View style={{marginVertical: hp(0.5)}}>
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
      <TouchableOpacity>
        <Dropdown
          disable={disabled}
          style={[
            styles.dropdown,
            {
              borderColor: 'rgba(84, 87, 91, 0.5)',
              borderWidth: 0,
              width: width,
              backgroundColor: backgroundColor,
              borderRadius: dropDownBorderRaduis,
              height: dropdownHight,
              marginBottom: marginBottom,
            },
          ]}
          placeholderStyle={[styles.placeholderStyle, {color: colorStyle}]}
          selectedTextStyle={[
            styles.selectedTextStyle,
            {fontSize: fontSize, color: selectTextColor},
          ]}
          inputSearchStyle={[
            styles.inputSearchStyle,
            {borderRadius: searchBorderRadius},
          ]}
          iconStyle={styles.iconStyle}
          iconColor={iconColor}
          maxHeight={230}
          containerStyle={[styles.containerStyle, {height: containerHight}]}
          borderRadius={hp(1)}
          showsVerticalScrollIndicator={false}
          placeholder={placeholder}
          onBlur={onBlur}
          labelField={labelField}
          valueField={valueField}
          data={data}
          value={value}
          labelExtractor={labelExtractor}
          search={search}
          searchPlaceholder={searchPlaceholder}
          onChangeText={onChangeText}
          onChange={onChange}
          onFocus={onFocus}
          defaultValue={defaultValue}
          itemContainerStyle={{
            marginVertical: 0,
            paddingVertical: 0,
          }}
          itemTextStyle={{
            color: colors.BLACK,
            marginVertical: 0,
            paddingVertical: 0,
          }}
          renderRightIcon={() => <SvgComponent svgMarkup={arrowDwon} />}
          {...props}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DropDown;

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
  },
  selectedTextStyle: {
    fontSize: hp(1.6),
    marginLeft: wp(3),
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

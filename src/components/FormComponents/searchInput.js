import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {wp} from '../../utils/CommonMethods/commonMethods';
import colors from '../../../src/assets/Colors/color';
import SvgComponent from '../SvgCustomComponents/svgCustomComponents';
import {searchIcon} from '../../assets/Images/svgImages';

const SearchInput = ({
  value,
  onChangeText,
  placeholder,
  width = wp(70),
  ...otherProps
}) => {
  return (
    <View style={[styles.container, {width: width}]}>
      <View style={styles.searchIconContainer}>
        <SvgComponent svgMarkup={searchIcon} />
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.placeHolderColor}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputColor,
    borderWidth: 1,
    borderColor: colors.inputborderColor,
    borderRadius: 10,
    padding: wp(1.5),
    margin: wp(2),
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: wp(5),
    elevation: 2,
  },

  searchIconContainer: {
    marginRight: wp(2),
  },
  input: {
    flex: 1,
    height: wp(10),
    fontSize: wp(4),
    color: colors.textColor,
  },
});

export default SearchInput;

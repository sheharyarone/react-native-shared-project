import React from 'react';
import {Text} from 'react-native';
import {hp} from '../../utils/CommonMethods/commonMethods';

function ValidationErrorMessage({alignSelf = 'flex-start', error, visible}) {
  let errorStyle = {
    color: 'red',
    marginLeft: '4%',
    textAlign: 'left',
    alignSelf: alignSelf,
    fontSize: hp(1.3),
    marginBottom: '2%',
    //marginVertical: hp(0.3),
    // paddingBottom: 10,
  };
  if (!visible || !error) return null;
  return <Text style={errorStyle}>{error}</Text>;
}

export default ValidationErrorMessage;

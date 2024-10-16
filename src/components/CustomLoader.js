import {View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import loader from '../assets/Animation/loader.json';
import {hp, wp} from '../utils/CommonMethods/commonMethods';
import white from '../assets/Animation/white.json';
import {useSelector} from 'react-redux';

const CustomLoader = ({loading}) => {
  const appMode = useSelector(state => state.appModeState?.appMode);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      {loading && (
        <LottieView
          source={appMode ? white : loader}
          autoPlay
          loop
          style={{
            height: hp(15),
            width: wp(10),
            backgroundColor: 'transparent',
          }}
        />
      )}
    </View>
  );
};

export default CustomLoader;

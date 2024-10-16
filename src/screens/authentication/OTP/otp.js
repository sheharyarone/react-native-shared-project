import React, {useEffect, useState, memo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {appLogo} from '../../../assets/Images/svgImages';
import {hp} from '../../../utils/CommonMethods/commonMethods';
import Header from '../../../components/Header/header';
import {backArrow} from '../../../assets/Images/svgImages';
import AppButton from '../../../components/FormComponents/button';
import OTPTextInput from 'react-native-otp-textinput';
import colors from '../../../assets/Colors/color';
import {useDispatch} from 'react-redux';
import {
  userDetails,
  FaceID,
  fingerPrintID,
  passwordSet,
  drunkColor,
  drunkModeValue,
  SubscriptionStatus,
  system_unit,
} from '../../../redux/Action/action';
import useAuth from '../../../auth/useAuth';
import apiClient from '../../../config/clint';
import {END_POINTS} from '../../../config/url';
import Toast from 'react-native-toast-message';
import {SvgXml} from 'react-native-svg';
import {useTranslation} from 'react-i18next';
import storage from '../../../auth/storage';

const OTP = ({navigation, route}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {
    storeUserDetails,
    storeToken,
    storeDrunkModeValue,
    storeFaceID,
    storeFingerPrintLock,
    storePassword,
    storeDrunkModeColor,
    storeSubscription,
    storeUnitValue,
  } = useAuth();
  const email = route?.params?.email;
  const screenType = route?.params?.screen;
  const [otpCode, setOtpCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [reLoading, setReLoading] = useState(false);
  const [counter, setCounter] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(false);

  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const verifyOTP = async () => {
    if (
      otpCode == '' ||
      otpCode === null ||
      otpCode == undefined ||
      otpCode.length < 4
    ) {
      Toast.show({
        type: 'error',
        text1: 'Please enter otp',
      });
    } else {
      try {
        setLoading(true);
        const result = await apiClient.post(END_POINTS.verifyOtp, {
          otp: otpCode,
          identity: email,
        });
        if (result.ok) {
          setLoading(false);
          dispatch(system_unit('imperial'));
          storeUnitValue('imperial');
          storeToken(result?.data?.data?.token);
          storeUserDetails(result?.data?.data);
          dispatch(userDetails(result?.data?.data));
          dispatch(SubscriptionStatus(false));
          storeSubscription(false);
          dispatch(drunkColor(0));
          dispatch(drunkModeValue(null));
          dispatch(FaceID(null));
          dispatch(fingerPrintID(null));
          dispatch(passwordSet(null));
          storeDrunkModeValue(null);
          storeFaceID(null);
          storeFingerPrintLock(null);
          storePassword(null);
          storeDrunkModeColor(0);
        } else {
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: result?.data?.message,
          });
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const verifyOTPForgotPassword = async () => {
    const FCMToken = await storage.getFcmToken();
    if (
      otpCode == '' ||
      otpCode === null ||
      otpCode == undefined ||
      otpCode.length < 4
    ) {
      Toast.show({
        type: 'error',
        text1: 'Please enter otp',
      });
    } else {
      try {
        setLoading(true);
        const result = await apiClient.post(
          END_POINTS.verifyOtpForgotPassword,
          {
            otp: otpCode,
            identity: email,
            fcm_token: FCMToken,
          },
        );
        if (result.ok) {
          setLoading(false);
          Toast.show({
            type: 'success',
            text2: result?.data?.message,
          });
          setTimeout(() => {
            navigation.navigate('NewPassword', {
              email: email,
            });
          }, 500);
        } else {
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: result?.data?.message,
          });
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const startTimer = () => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter === 1) {
          clearInterval(intervalId);
          setResendDisabled(false);
        }
        return prevCounter - 1;
      });
    }, 1000);
  };

  const reSendOTP = async () => {
    try {
      setReLoading(true);
      const result = await apiClient.post(END_POINTS.reSendOTP, {
        identity: email,
      });
      if (result.ok) {
        setReLoading(false);
        setResendDisabled(true);
        setCounter(60);
        Toast.show({
          type: 'success',
          text2: result?.data?.message,
        });
        startTimer();
      } else {
        setReLoading(false);
        Toast.show({
          type: 'error',
          text2: result?.data?.message,
        });
      }
    } catch (error) {
      console.log('error resend otp', error);
    }
  };

  const SvgComponentMemoized = memo(({svgMarkup}) => (
    <SvgXml xml={svgMarkup} width="137" height="137" />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <Header
              leftSvgIcon={backArrow(colors.WHITE)}
              onLeftIconPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={styles.logoContainer}>
            <SvgComponentMemoized svgMarkup={appLogo} />
          </View>
          <View style={styles.logoHeading}>
            <Text style={styles.headingText}>{t('verification')}</Text>
            <Text style={styles.subHeadingText}>
              {t('sentTheVerification')}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <OTPTextInput
              inputCount={4}
              containerStyle={styles.input}
              handleTextChange={code => setOtpCode(code)}
              textInputStyle={styles.underlineStyleBase}
              tintColor={colors.inputTextColor}
              offTintColor={colors.otpOffSetColor}
              keyboardType="numeric"
            />
            <View style={styles.reSendOTPContainer}>
              <TouchableOpacity
                onPress={() => {
                  reSendOTP();
                }}
                disabled={resendDisabled}>
                <Text
                  style={[
                    styles.reSendText,
                    resendDisabled && styles.disabledText,
                  ]}>
                  {resendDisabled
                    ? `00:${counter < 10 ? `0${counter}` : counter}`
                    : t('resendOTP')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: hp(8)}}>
              <AppButton
                title={t('continue')}
                disabled={loading}
                loading={loading}
                onPress={() => {
                  if (screenType === 'forgot') {
                    verifyOTPForgotPassword();
                  } else {
                    verifyOTP();
                  }
                }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTP;

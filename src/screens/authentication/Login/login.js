import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import * as Yup from 'yup';
import styles from './styles';
import SvgComponent from '../../../components/SvgCustomComponents/svgCustomComponents';
import AppForm from '../../../components/FormComponents/from';
import AppFromField from '../../../components/FormComponents/fromField';
import SubmitButton from '../../../components/FormComponents/submitButton';
import {hp, wp} from '../../../utils/CommonMethods/commonMethods';
import {eyeClose, eyeOpen, appLogo} from '../../../assets/Images/svgImages';
import AppMobileNoInputField from '../../../components/FormComponents/mobileInput';

const Login = ({navigation}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [valid, setIsValid] = useState(false);
  const [formatedMobileNO, setFormatedMobileNO] = useState('');

  const initialValues = {
    email: '',
    password: '',
    mobileNo: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Phone is Required'),
    password: Yup.string().required('Password is Required'),
    mobileNo: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Phone Number Valid')
      .required('Phone is Required'),
  });

  useEffect(() => {
    const backhandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );
    return () => {
      backhandler.remove();
    };
  }, []);

  const submit = async values => {
    try {
      console.log('login values', values);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <SvgComponent svgMarkup={appLogo} />
          </View>
          <View style={styles.logoHeading}>
            <Text style={styles.headingText}>{'Login'}</Text>
          </View>
          <View style={styles.inputContainer}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={submit}>
              <AppMobileNoInputField
                valid={valid}
                setIsValid={setIsValid}
                formatedMobileNO={formatedMobileNO}
                setFormatedMobileNO={setFormatedMobileNO}
                name={'mobileNo'}
                keyboardType="numeric"
                placeholder={'1234567890'}
                containerStyle={styles.phoneFieldContainer}
                textContainerStyle={styles.phoneNoTextCon}
                textInputStyle={styles.phoneNoInputcon}
                codeTextStyle={styles.codeTextStyle}
              />
              <AppFromField
                placeholder={'password'}
                autoCapitalize="none"
                name="password"
                autoCorrect={false}
                onRightIconPress={() => setIsSecureEntry(!isSecureEntry)}
                rightSvgIcon={isSecureEntry ? eyeClose : eyeOpen}
                secureTextEntry={isSecureEntry}
                TextContentType="password"
              />
              {/* <View style={styles.forgotContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.forgotText}>{'forgotPassword'}</Text>
                </TouchableOpacity>
              </View> */}
              <View style={{marginTop: hp(8)}}>
                <SubmitButton
                  // loading={loading}
                  // disabled={loading}
                  title={'Log In'}
                />
              </View>
            </AppForm>
          </View>
          {/* <View style={styles.dontAccountContainer}>
            <Text style={styles.dontAccountText}>{'anAccount'}</Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>{'signup'}</Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

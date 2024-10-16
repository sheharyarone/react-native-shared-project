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
import {eyeClose, eyeOpen} from '../../../assets/Images/svgImages';


const Login = ({navigation}) => {

  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
        
          </View>
          <View style={styles.logoHeading}>
            <Text style={styles.headingText}>{"Login"}</Text>
            <Text style={styles.subHeadingText}>{'yourAccount'}</Text>
          </View>
      
          <View style={styles.inputContainer}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={submit}>
              <AppFromField
                placeholder={'email/Phone'}
                autoCapitalize="none"
                name="email"
                autoCorrect={false}
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
              <View style={styles.forgotContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.forgotText}>{'forgotPassword'}</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: hp(8)}}>
                <SubmitButton
                  loading={loading}
                  disabled={loading}
                  title={'logIn'}
                />
              </View>
            </AppForm>
          </View>
          <View style={styles.dontAccountContainer}>
            <Text style={styles.dontAccountText}>{'anAccount'}</Text>
            <TouchableOpacity >
              <Text style={styles.signUpText}>{'signup'}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

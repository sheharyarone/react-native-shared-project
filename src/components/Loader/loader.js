import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
  ActivityIndicator,
} from 'react-native';
import loaderStyles from './styles';
import colors from '../../assets/Colors/color';

const Loader = props => {
  // const {colors} = useTheme();
  const styles = loaderStyles(colors);
  const [isloading, setIsLoading] = useState(props.isloading);
  useEffect(() => {
    setIsLoading(props.isloading);
  }, [props.isloading]);
  return (
    <Modal
      visible={isloading}
      statusBarTranslucent={true}
      animationType={'fade'}
      transparent={props.customLoader ? false : true}
      onRequestClose={() => {
        setIsLoading(false);
      }}>
      <View
        style={[
          styles.container,
          {backgroundColor: !props.customLoader && 'rgba(0,0,0,0.4)'},
        ]}>
        <View style={[styles.modalContainer]}>
          <ActivityIndicator color={colors.inputTextColor} size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

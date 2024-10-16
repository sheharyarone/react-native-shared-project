import {useContext} from 'react';
import authStorage from './storage';
import AuthContext from './context';

export default useAuth = () => {
  const {user, setUser} = useContext(AuthContext);

  const storeUserDetails = async userDetails => {
    setUser(userDetails);
    await authStorage.storeUserDetails(userDetails);
  };
  const storeToken = async token => {
    await authStorage?.storeToken(token);
  };

  const storeAppMode = async mode => {
    await authStorage?.storeAppMode(mode);
  };
  const storeLightDark = async mode1 => {
    await authStorage?.storeLightAndDark(mode1);
  };
  const storeSystem = async number => {
    await authStorage?.storeSystemValue(number);
  };
  const storeFingerPrintLock = async lock => {
    await authStorage?.fingerPrint_lock(lock);
  };
  const storeFaceID = async id => {
    await authStorage?.faceId_Enable(id);
  };
  const storePassword = async password => {
    await authStorage?.storePasswordSet(password);
  };
  const storeDrunkModeColor = async color => {
    await authStorage.storeDrunkColor(color);
  };
  const storeDrunkModeValue = async value => {
    await authStorage.storeDrunkMode(value);
  };

  const storeSubscription = async payload => {
    await authStorage?.EnableSubscription(payload);
  };
  const storeLocation = async value => {
    await authStorage?.storeLocationValue(value);
  };
  const storeCallAndText = async value => {
    await authStorage?.storeCallAndTextValue(value);
  };
  const storePreset = async payload => {
    await authStorage?.storeRealCallPreset(payload);
  };
  const storeUnitValue = async value => {
    await authStorage?.storeUnitSystemValue(value);
  };

  const logOut = async () => {
    await authStorage.deleteUserDetails();
    await authStorage.deleteToken();
    // await authStorage.deleteDrunkMode();
    // await authStorage.deleteDrunkColor();
    setUser(null);
  };
  return {
    user,
    setUser,
    storeUserDetails,
    storeToken,
    storeAppMode,
    logOut,
    storeFingerPrintLock,
    storeFaceID,
    storePassword,
    storeDrunkModeColor,
    storeDrunkModeValue,
    storeSubscription,
    storePreset,
    storeLocation,
    storeCallAndText,
    storeUnitValue,
    storeLightDark,
    storeSystem,
  };
};

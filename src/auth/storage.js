import AsyncStorage from '@react-native-async-storage/async-storage';

const key1 = 'userDetails';
const key2 = 'token';
const key3 = 'appMode';
const key4 = 'drunkModeValue';
const key5 = 'drunkColor';
const key6 = 'screenName';
const key7 = 'passwordSet';
const key8 = 'lockEnable';
const key9 = 'faceID';
const key10 = 'fingerPrint';
const key11 = 'subscription';
const key12 = 'storeFcmToken';
const key13 = 'ringToneId';
const key14 = 'groupRingTone';
const key15 = 'realcallpreset';
const key16 = 'LocationValue';
const key17 = 'CallEndText';
const key18 = 'ContactListValue';
const key19 = 'mapValue';
const key20 = 'settingValue';
const key21 = 'drunkRadius';
const key22 = 'km';
const key23 = 'endLatLng';
const key24 = 'unitSystemValue';
const key25 = 'EndTrip';
const key26 = 'voipToken';
const key27 = 'startTripTime';
const key28 = 'rideEnd';
const key29 = 'wordLangth';
const key30 = 'lightAndDark';
const key31 = 'systemValue';

const storeUserDetails = async userDetails => {
  try {
    await AsyncStorage.setItem(key1, JSON.stringify(userDetails));
  } catch (error) {
    console.log('Error occured', error);
  }
};
const getUserDetails = async () => {
  try {
    const res = await AsyncStorage.getItem(key1);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the user detail ', error);
  }
};

const deleteUserDetails = async () => {
  try {
    await AsyncStorage.removeItem(key1);
  } catch (error) {
    console.log('Error removing the user details ', error);
  }
};

const storeToken = async token => {
  try {
    await AsyncStorage.setItem(key2, JSON.stringify(token));
  } catch (error) {
    console.log('Error occured store token', error);
  }
};
const getToken = async () => {
  try {
    const res = await AsyncStorage.getItem(key2);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the token', error);
  }
};

const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem(key2);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};

const storeAppMode = async appMode => {
  try {
    await AsyncStorage.setItem(key3, JSON.stringify(appMode));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getAppMode = async () => {
  try {
    const res = await AsyncStorage.getItem(key3);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};

const storeDrunkMode = async drunkModeValue => {
  try {
    await AsyncStorage.setItem(key4, JSON.stringify(drunkModeValue));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getDrunkMode = async () => {
  try {
    const res = await AsyncStorage.getItem(key4);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteDrunkMode = async () => {
  try {
    await AsyncStorage.removeItem(key4);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};

const storeDrunkColor = async drunkColor => {
  try {
    await AsyncStorage.setItem(key5, JSON.stringify(drunkColor));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getDrunkColor = async () => {
  try {
    const res = await AsyncStorage.getItem(key5);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteDrunkColor = async () => {
  try {
    await AsyncStorage.removeItem(key5);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};

const storeScreenName = async screenName => {
  try {
    await AsyncStorage.setItem(key6, JSON.stringify(screenName));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getScreenName = async () => {
  try {
    const res = await AsyncStorage.getItem(key6);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteScreenName = async () => {
  try {
    await AsyncStorage.removeItem(key6);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};

const storePasswordSet = async passwordSet => {
  try {
    await AsyncStorage.setItem(key7, JSON.stringify(passwordSet));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getPasswordSet = async () => {
  try {
    const res = await AsyncStorage.getItem(key7);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deletePasswordSet = async () => {
  try {
    await AsyncStorage.removeItem(key7);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};

const fingerPrint_lock = async lock => {
  try {
    await AsyncStorage.setItem(key8, JSON.stringify(lock));
  } catch (error) {
    console.log('Error occured store app lock enable', error);
  }
};
const getLock_FingerPrint = async () => {
  try {
    const res = await AsyncStorage.getItem(key8);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app loack enable', error);
  }
};
const delete_FingerPrint = async () => {
  try {
    await AsyncStorage.removeItem(key8);
  } catch (error) {
    console.log('Error removing the lock enable', error);
  }
};
const faceId_Enable = async id => {
  try {
    await AsyncStorage.setItem(key9, JSON.stringify(id));
  } catch (error) {
    console.log('Error occured store app lock enable', error);
  }
};
const getFaceId = async () => {
  try {
    const res = await AsyncStorage.getItem(key9);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app loack enable', error);
  }
};
const deleteFaceId = async () => {
  try {
    await AsyncStorage.removeItem(key9);
  } catch (error) {
    console.log('Error removing the lock enable', error);
  }
};

const EnableSubscription = async payload => {
  try {
    await AsyncStorage.setItem(key11, JSON.stringify(payload));
  } catch (error) {
    console.log('Error occured store Subscription', error);
  }
};
const getEnableSubscription = async () => {
  try {
    const res = await AsyncStorage.getItem(key11);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app loack enable', error);
  }
};

const storeFcmToken = async FCMToken => {
  try {
    await AsyncStorage.setItem(key12, FCMToken);
  } catch (error) {
    console.log('Error Storing  the auth Token ', error);
  }
};
const getFcmToken = async () => {
  try {
    return await AsyncStorage.getItem(key12);
  } catch (error) {
    console.log('Error getting the auth Token ', error);
  }
};

const storeRingToneId = async RingId => {
  try {
    await AsyncStorage.setItem(key13, JSON.stringify(RingId));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getRingToneId = async () => {
  try {
    const res = await AsyncStorage.getItem(key13);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteRingToneId = async () => {
  try {
    await AsyncStorage.removeItem(key13);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};

const storeGroupRingToneId = async GroupRingId => {
  try {
    await AsyncStorage.setItem(key14, JSON.stringify(GroupRingId));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getGroupRingToneId = async () => {
  try {
    const res = await AsyncStorage.getItem(key14);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteGroupRingToneId = async () => {
  try {
    await AsyncStorage.removeItem(key14);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};
const storeRealCallPreset = async preset => {
  try {
    await AsyncStorage.setItem(key15, JSON.stringify(preset));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getRealCallPreset = async () => {
  try {
    const res = await AsyncStorage.getItem(key15);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteRealCallPreset = async () => {
  try {
    await AsyncStorage.removeItem(key15);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};
const storeLocationValue = async value => {
  try {
    await AsyncStorage.setItem(key16, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getLocationValue = async () => {
  try {
    const res = await AsyncStorage.getItem(key16);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteLocationValue = async () => {
  try {
    await AsyncStorage.removeItem(key16);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};

const storeCallAndTextValue = async value => {
  try {
    await AsyncStorage.setItem(key17, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getCallAndTextValue = async () => {
  try {
    const res = await AsyncStorage.getItem(key17);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteCallAndTextValue = async () => {
  try {
    await AsyncStorage.removeItem(key17);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};
const storeIntroValueContactList = async value => {
  try {
    await AsyncStorage.setItem(key18, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getIntroValueContactList = async () => {
  try {
    const res = await AsyncStorage.getItem(key18);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteIntroValueContactList = async () => {
  try {
    await AsyncStorage.removeItem(key18);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};
const storeIntroValueMap = async value => {
  try {
    await AsyncStorage.setItem(key19, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getIntroValueMap = async () => {
  try {
    const res = await AsyncStorage.getItem(key19);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteIntroValueMap = async () => {
  try {
    await AsyncStorage.removeItem(key19);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};
const storeIntroValueSetting = async value => {
  try {
    await AsyncStorage.setItem(key20, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getIntroValueSetting = async () => {
  try {
    const res = await AsyncStorage.getItem(key20);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteIntroValueSetting = async () => {
  try {
    await AsyncStorage.removeItem(key20);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};
const storekm = async value => {
  try {
    await AsyncStorage.setItem(key22, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getkm = async () => {
  try {
    const res = await AsyncStorage.getItem(key22);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deletekm = async () => {
  try {
    await AsyncStorage.removeItem(key22);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};

const storeEndLatLong = async value => {
  try {
    await AsyncStorage.setItem(key23, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getEndLatLong = async () => {
  try {
    const res = await AsyncStorage.getItem(key23);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteEndLatLong = async () => {
  try {
    await AsyncStorage.removeItem(key23);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};

const drunkRadius = async value => {
  try {
    await AsyncStorage.setItem(key21, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store drunkRadius', error);
  }
};
const getDrunkRadius = async () => {
  try {
    const res = await AsyncStorage.getItem(key21);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the drunkRadius', error);
  }
};

const storeUnitSystemValue = async value => {
  try {
    await AsyncStorage.setItem(key24, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store drunkRadius', error);
  }
};
const getUnitSystemValue = async () => {
  try {
    const res = await AsyncStorage.getItem(key24);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the drunkRadius', error);
  }
};
const storeEndTrip = async value => {
  try {
    await AsyncStorage.setItem(key25, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getEndTrip = async () => {
  try {
    const res = await AsyncStorage.getItem(key25);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteEndTrip = async () => {
  try {
    await AsyncStorage.removeItem(key25);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};
const storeStartTripTime = async value => {
  try {
    await AsyncStorage.setItem(key26, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getStartTripTime = async () => {
  try {
    const res = await AsyncStorage.getItem(key27);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteStartTripTime = async () => {
  try {
    await AsyncStorage.removeItem(key27);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};
const storeRideEnd = async value => {
  try {
    await AsyncStorage.setItem(key28, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store app mode', error);
  }
};
const getRideEnd = async () => {
  try {
    const res = await AsyncStorage.getItem(key28);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the app mode', error);
  }
};
const deleteRideEnd = async () => {
  try {
    await AsyncStorage.removeItem(key27);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};

const storeVoipToken = async token => {
  try {
    await AsyncStorage.setItem(key26, token);
  } catch (error) {
    console.log('Error occured store voip token', error);
  }
};
const getVoipToken = async () => {
  try {
    return await AsyncStorage.getItem(key26);
  } catch (error) {
    console.log('Error getting the voip token', error);
  }
};

const storeWordLength = async value => {
  try {
    await AsyncStorage.setItem(key29, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store voip token', error);
  }
};
const getWordLength = async () => {
  try {
    return await AsyncStorage.getItem(key29);
  } catch (error) {
    console.log('Error getting the voip token', error);
  }
};
const storeLightAndDark = async value => {
  try {
    await AsyncStorage.setItem(key30, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store voip token', error);
  }
};
const getLightAndDark = async () => {
  try {
    return await AsyncStorage.getItem(key30);
  } catch (error) {
    console.log('Error getting the voip token', error);
  }
};
const deleteLightAndDark = async () => {
  try {
    await AsyncStorage.removeItem(key30);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};
const storeSystemValue = async value => {
  try {
    await AsyncStorage.setItem(key31, JSON.stringify(value));
  } catch (error) {
    console.log('Error occured store voip token', error);
  }
};
const getSystemValue = async () => {
  try {
    return await AsyncStorage.getItem(key31);
  } catch (error) {
    console.log('Error getting the voip token', error);
  }
};
const deleteSystemValue = async () => {
  try {
    await AsyncStorage.removeItem(key31);
  } catch (error) {
    console.log('Error removing the token', error);
  }
};
export default {
  storeUserDetails,
  getUserDetails,
  deleteUserDetails,
  storeToken,
  getToken,
  deleteToken,
  storeAppMode,
  getAppMode,
  storeDrunkMode,
  getDrunkMode,
  deleteDrunkMode,
  storeDrunkColor,
  getDrunkColor,
  deleteDrunkColor,
  storeScreenName,
  getScreenName,
  deleteScreenName,
  storePasswordSet,
  getPasswordSet,
  deletePasswordSet,
  faceId_Enable,
  getFaceId,
  deleteFaceId,
  fingerPrint_lock,
  getLock_FingerPrint,
  delete_FingerPrint,
  EnableSubscription,
  getEnableSubscription,
  storeFcmToken,
  getFcmToken,
  storeRingToneId,
  getRingToneId,
  deleteRingToneId,
  storeGroupRingToneId,
  getGroupRingToneId,
  deleteGroupRingToneId,
  storeRealCallPreset,
  getRealCallPreset,
  deleteRealCallPreset,
  storeLocationValue,
  getLocationValue,
  deleteLocationValue,
  storeCallAndTextValue,
  getCallAndTextValue,
  deleteCallAndTextValue,
  storeIntroValueContactList,
  getIntroValueContactList,
  deleteIntroValueContactList,
  storeIntroValueMap,
  getIntroValueMap,
  deleteIntroValueMap,
  storeIntroValueSetting,
  getIntroValueSetting,
  deleteIntroValueSetting,
  storekm,
  getkm,
  deletekm,
  storeEndLatLong,
  getEndLatLong,
  deleteEndLatLong,
  drunkRadius,
  getDrunkRadius,
  storeUnitSystemValue,
  getUnitSystemValue,
  storeEndTrip,
  getEndTrip,
  deleteEndTrip,

  storeVoipToken,
  getVoipToken,

  storeStartTripTime,
  getStartTripTime,
  deleteStartTripTime,
  storeRideEnd,
  getRideEnd,
  deleteRideEnd,
  storeWordLength,
  getWordLength,
  storeLightAndDark,
  getLightAndDark,
  deleteLightAndDark,
  storeSystemValue,
  getSystemValue,
  deleteSystemValue,
};

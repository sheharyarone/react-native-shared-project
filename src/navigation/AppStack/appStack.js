import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../screens/Profile/profile';
import OtherUserProfile from '../../screens/OtherUserProfile/otherUserProfile';
import Subscription from '../../screens/Subscription/subscription';
import CommandsList from '../../screens/CommandsList/commandsList';
import PresetFunctions from '../../screens/PresetFunctions/presetFunctions';

import FakeCallList from '../../screens/FakeCalls/FakeList/fakeList';
import SetFakeCall from '../../screens/FakeCalls/SetFakeCall/setFakeCall';
import CommandsAndFunction from '../../screens/FakeCalls/CommandsAndFunctions/commandsAndFuction';
import DrunkModeSettings from '../../screens/DrunkModeSettings/drunkModeSettings';
import BottomTabbarStack from '../BottomStack/bottomTabBar';
import NewContact from '../../screens/Contacts/NewContact/newContact';
import NewGroup from '../../screens/Contacts/NewGroupCreate/newGroup';
import SelectContacts from '../../screens/Contacts/SelectContacts/selectContacts';
import EditContact from '../../screens/Contacts/EditContacts/editContacts';
import EditGroup from '../../screens/Contacts/EditGroup/editGroup';
import securitySetPassword from '../../screens/SecurityScreens/securitySetPassword/securitySetPassword';
import securityScreen from '../../screens/SecurityScreens/SecurityScreen/SecurityScreen';
import languageScreen from '../../screens/languageScreen/languageScreen';
import FAQsScreen from '../../screens/FAQsScreen/FAQsScreen';
import DialPadScreen from '../../screens/DialPadScreen/DialPadScreen';
import Notifications from '../../screens/Notifications/Notifications';
import NotificationsSetting from '../../screens/NotificationSetting/notificationSetting';

import SetFaceID from '../../screens/SecurityScreens/FaceID/faceId';
import SetFingerPrint from '../../screens/SecurityScreens/FingerPrint/fingerPrint';

import WebViewSubscription from '../../screens/WebViewSubscription/WebViewSubscription';
import SecurityPasswordForgot from '../../screens/SecurityScreens/SecurityPasswordForgot/SecurityPasswordForgot';
import SecurityOTP from '../../screens/SecurityScreens/securityOTP/securityOTP';
import TermsConditions from '../../screens/TermsConditions/termsConditions';
import PrivacyPolicy from '../../screens/PrivacyPolicy/privacyPolicy';
import ChatUI from '../../screens/Message/ChatUI/chat';
import ChatsContacts from '../../screens/Message/ChatContacts/chatContact';

import RingTone from '../../screens/RingTone/ringTone';
import RineToneGroup from '../../screens/RingToneGroup/ringToneGroup';
import TestingFloder from '../../screens/TestingFloder/testingFloder';
import TestingVoiceMessage from '../../screens/TestingVoiceMessage/testingVoiceMessage';
import AgoraCall from '../../screens/TestingVoiceMessage';
import OutGoingCallIOS from '../../components/OutGoingCallIOS/OutGoingCallIOS';
import ToAndFrom from '../../screens/ToAndFrom/toAndFrom';
import ToAndFroMap from '../../screens/ToAndFroMap/toAndFroMap';
import UnitSystem from '../../screens/UnitSystem/unitSystem';
import EndTrip from '../../screens/EndTrip/endTrip';
import AppTutorialScreen from '../../screens/AppTutorialScreen/AppTutorialScreen';
import DiscreetTools from '../../screens/DiscreetTools/discreetTools';
import Recordings from '../../screens/Recordings/recordings';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabbarStack"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="BottomTabbarStack" component={BottomTabbarStack} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="OtherUserProfile" component={OtherUserProfile} />

      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="CommandsList" component={CommandsList} />
      <Stack.Screen name="PresetFunctions" component={PresetFunctions} />
      <Stack.Screen name="FakeCallList" component={FakeCallList} />
      <Stack.Screen name="SetFakeCall" component={SetFakeCall} />
      <Stack.Screen
        name="CommandsAndFunction"
        component={CommandsAndFunction}
      />
      <Stack.Screen name="DrunkModeSettings" component={DrunkModeSettings} />
      <Stack.Screen name="NewContact" component={NewContact} />
      <Stack.Screen name="NewGroup" component={NewGroup} />
      <Stack.Screen name="SelectContacts" component={SelectContacts} />
      <Stack.Screen name="EditContact" component={EditContact} />
      <Stack.Screen name="EditGroup" component={EditGroup} />
      <Stack.Screen
        name="securitySetPassword"
        component={securitySetPassword}
      />
      <Stack.Screen name="languageScreen" component={languageScreen} />
      <Stack.Screen name="securityScreen" component={securityScreen} />
      <Stack.Screen name="FAQsScreen" component={FAQsScreen} />
      <Stack.Screen name="DialPadScreen" component={DialPadScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen
        name="NotificationsSetting"
        component={NotificationsSetting}
      />

      <Stack.Screen name="SetFaceID" component={SetFaceID} />
      <Stack.Screen name="SetFingerPrint" component={SetFingerPrint} />

      <Stack.Screen
        name="WebViewSubscription"
        component={WebViewSubscription}
      />
      <Stack.Screen
        name="SecurityPasswordForgot"
        component={SecurityPasswordForgot}
      />
      <Stack.Screen name="SecurityOTP" component={SecurityOTP} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="ChatUI" component={ChatUI} />
      <Stack.Screen name="ChatsContacts" component={ChatsContacts} />

      <Stack.Screen name="RingTone" component={RingTone} />
      <Stack.Screen name="RineToneGroup" component={RineToneGroup} />
      <Stack.Screen name="TestingFloder" component={TestingFloder} />
      <Stack.Screen
        name="TestingVoiceMessage"
        component={TestingVoiceMessage}
      />
      <Stack.Screen name="AgoraCall" component={AgoraCall} />
      <Stack.Screen name="OutGoingCallIOS" component={OutGoingCallIOS} />
      <Stack.Screen name="ToAndFrom" component={ToAndFrom} />
      <Stack.Screen name="ToAndFroMap" component={ToAndFroMap} />
      <Stack.Screen name="UnitSystem" component={UnitSystem} />
      <Stack.Screen name="EndTrip" component={EndTrip} />
      <Stack.Screen name="AppTutorialScreen" component={AppTutorialScreen} />
      <Stack.Screen name="DiscreetTools" component={DiscreetTools} />
      <Stack.Screen name="Recordings" component={Recordings} />
    </Stack.Navigator>
  );
};

export default AppStack;

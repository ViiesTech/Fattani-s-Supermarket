import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/auth/Onboarding';
import Welcome from './../screens/auth/Welcome';
import Login from './../screens/auth/Login';
import SignUp from './../screens/auth/SignUp';
import SelectLocation from './../screens/auth/SelectLocation';
import ForgotPassword from './../screens/auth/ForgotPassword';
import EmailVerification from './../screens/auth/EmailVerification';
import NewPassword from './../screens/auth/NewPassword';
import PriceRange from '../screens/main/Home/PriceRange';

const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
      <Stack.Screen name="PriceRange" component={PriceRange} />
    </Stack.Navigator>
  );
};

export default Auth;

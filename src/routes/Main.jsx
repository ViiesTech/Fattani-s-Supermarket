/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AppColors, responsiveHeight, responsiveWidth } from '../utils';
import { View } from 'react-native';
import { AppIcons } from '../assets/icons';
import Home from '../screens/main/Home/Home';
import SVGXml from '../assets/icons/SVGXML';
import SeeAllCategories from './../screens/main/Home/SeeAllCategories';
import PersonalCare from './../screens/main/Home/PersonalCare';
import ProductDetails from './../screens/main/Home/ProductDetails';
import PopularSearch from './../screens/main/Home/PopularSearch';
import ShoppingCart from './../screens/main/Home/ShoppingCart';
import CheckOut from './../screens/main/Home/CheckOut';
import Profile from './../screens/main/Profile/Profile';
import EditProfile from './../screens/main/Profile/EditProfile';
import PaymentMethod from './../screens/main/Profile/PaymentMethod';
import MyAddress from './../screens/main/Profile/MyAddress';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Main"
    >
      <Stack.Screen name="Main" component={MyTabs} />
      <Stack.Screen name="SeeAllCategories" component={SeeAllCategories} />
      <Stack.Screen name="PersonalCare" component={PersonalCare} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="PopularSearch" component={PopularSearch} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="MyAddress" component={MyAddress} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: AppColors.ThemeBlue,
        tabBarInactiveTintColor: AppColors.textColor,
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarStyle: {
          height: responsiveHeight(12),
          paddingTop: responsiveHeight(1.8),
          backgroundColor: '#FAFAFA',
        },
      }}
    >
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: AppColors.darkGreen,
                  width: responsiveWidth(12),
                  height: responsiveWidth(12),
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SVGXml icon={AppIcons.home} width={25} height={25} />
              </View>
            ) : (
              <SVGXml icon={AppIcons.home_default} width={25} height={25} />
            ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: AppColors.darkGreen,
                  width: responsiveWidth(12),
                  height: responsiveWidth(12),
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SVGXml icon={AppIcons.menu_white} width={25} height={25} />
              </View>
            ) : (
              <SVGXml icon={AppIcons.menu_default} width={25} height={25} />
            ),
        }}
      />
      {/* <Tab.Screen
        name={'Inbox'}
        component={Inbox}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{ alignItems: 'center' }}>
                <SVGXml icon={AppIcons.chat_blue} width={30} height={30} />
                <LineBreak space={0.5} />
                <View
                  style={{
                    width: responsiveHeight(0.7),
                    height: responsiveHeight(0.7),
                    borderRadius: 100,
                    backgroundColor: AppColors.lightGreen,
                  }}
                />
              </View>
            ) : (
              <SVGXml icon={AppIcons.chat_gray} width={30} height={30} />
            ),
        }}
      /> */}
      {/* <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{ alignItems: 'center' }}>
                <SVGXml icon={AppIcons.profile_blue} width={30} height={30} />
                <LineBreak space={0.5} />
                <View
                  style={{
                    width: responsiveHeight(0.7),
                    height: responsiveHeight(0.7),
                    borderRadius: 100,
                    backgroundColor: AppColors.lightGreen,
                  }}
                />
              </View>
            ) : (
              <SVGXml icon={AppIcons.profile_gray} width={30} height={30} />
            ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
export default Main;

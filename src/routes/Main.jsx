/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils';
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
import MyOders from './../screens/main/Profile/MyOders';
import ChatWithUs from './../screens/main/Profile/ChatWithUs';
import Notification from './../screens/main/Profile/Notification';
import Feather from 'react-native-vector-icons/Feather';

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
      <Stack.Screen name="MyOders" component={MyOders} />
      <Stack.Screen name="ChatWithUs" component={ChatWithUs} />
      <Stack.Screen name="Notification" component={Notification} />
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
        name={'Notification'}
        component={Notification}
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
                <Feather
                  name="bell"
                  size={responsiveFontSize(3.5)}
                  color={AppColors.WHITE}
                />
              </View>
            ) : (
              <Feather
                name="bell"
                size={responsiveFontSize(3.5)}
                color={'#37474F'}
              />
            ),
        }}
      />
      <Tab.Screen
        name={'Cart'}
        component={ShoppingCart}
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
                <SVGXml icon={AppIcons.white_cart} width={25} height={25} />
              </View>
            ) : (
              <SVGXml icon={AppIcons.cart} width={25} height={25} />
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
    </Tab.Navigator>
  );
}
export default Main;

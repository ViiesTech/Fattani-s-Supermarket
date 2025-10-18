/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Switch,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { AppImages } from '../../assets/images';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../../components/AuthHeader';
import LineBreak from '../../components/LineBreak';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import SVGXml from '../../assets/icons/SVGXML';
import { AppIcons } from '../../assets/icons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const nav = useNavigation();
  const [isFocus, setIsFocus] = useState(false);

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    <KeyboardAvoidingView
      behavior={
        Platform.OS === 'ios' ? 'padding' : isFocus ? 'height' : undefined
      }
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={AppImages.signin_bg}
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(55),
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: responsiveWidth(4) }}>
              <AuthHeader />
            </View>
          </SafeAreaView>
        </ImageBackground>

        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              width: responsiveWidth(100),
              height: responsiveHeight(50),
              backgroundColor: '#f4f5f9',
              position: 'absolute',
              bottom: 0,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingHorizontal: responsiveWidth(4),
            }}
          >
            <LineBreak space={3} />
            <AppText
              title="Welcome back !"
              textColor={AppColors.BLACK}
              textSize={3}
              textFontWeight
            />
            <AppText
              title="Sign in to your account"
              textColor={AppColors.GRAY}
              textSize={2}
            />
            <LineBreak space={3} />

            <AppTextInput
              inputPlaceHolder="Email address"
              containerBg={AppColors.WHITE}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              borderRadius={5}
              logo={<SVGXml icon={AppIcons.email} width={20} height={20} />}
            />
            <LineBreak space={1} />

            <AppTextInput
              inputPlaceHolder="Password"
              containerBg={AppColors.WHITE}
              borderRadius={5}
              secureTextEntry={!isShowPass}
              logo={<SVGXml icon={AppIcons.password} width={20} height={20} />}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              rightIcon={
                <TouchableOpacity onPress={() => setIsShowPass(!isShowPass)}>
                  <Feather
                    name={isShowPass ? 'eye' : 'eye-off'}
                    size={responsiveFontSize(2.5)}
                    color={AppColors.GRAY}
                  />
                </TouchableOpacity>
              }
            />

            <LineBreak space={2} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: responsiveWidth(1),
                  alignItems: 'center',
                }}
              >
                <Switch
                  trackColor={{ false: '#C0C0C0', true: AppColors.royalBlue }}
                  thumbColor={isEnabled ? AppColors.WHITE : '#f4f3f4'}
                  ios_backgroundColor="#C0C0C0"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <AppText
                  title="Remember me"
                  textColor={AppColors.GRAY}
                  textSize={2}
                />
              </View>

              <TouchableOpacity onPress={() => nav.navigate("ForgotPassword")}>
                <AppText
                  title="Forgot Password"
                  textColor={AppColors.royalBlue}
                  textSize={2}
                />
              </TouchableOpacity>
            </View>

            <LineBreak space={2} />
            <AppButton
              title="Login"
              btnBackgroundColor={AppColors.darkGreen}
              textColor={AppColors.WHITE}
              handlePress={() => nav.navigate('PriceRange')} 
            />

            <LineBreak space={2} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <AppText
                title="Don’t have an account ? "
                textColor={AppColors.GRAY}
                textSize={2}
              />
              <TouchableOpacity onPress={() => nav.navigate('SignUp')}>
                <AppText
                  title="Sign up"
                  textColor={AppColors.BLACK}
                  textSize={2}
                  textFontWeight
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

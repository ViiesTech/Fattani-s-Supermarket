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

const SignUp = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  const nav = useNavigation();
  const [isFocus, setIsFocus] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={
        Platform.OS === 'ios' ? 'padding' : isFocus ? 'height' : undefined
      }
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={AppImages.signup_bg}
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
              height: responsiveHeight(52),
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
              title="Create account"
              textColor={AppColors.BLACK}
              textSize={3}
              textFontWeight
            />
            <AppText
              title="Quickly create account"
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
              inputPlaceHolder="Phone number"
              containerBg={AppColors.WHITE}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              borderRadius={5}
              logo={<SVGXml icon={AppIcons.phone} width={20} height={20} />}
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
            <AppButton
              title="Signup"
              btnBackgroundColor={AppColors.darkGreen}
              textColor={AppColors.WHITE}
              handlePress={() => nav.navigate('SelectLocation')}
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
                title="Already have an account ? "
                textColor={AppColors.GRAY}
                textSize={2}
              />
              <TouchableOpacity onPress={() => nav.navigate('Login')}>
                <AppText
                  title="Login"
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

export default SignUp;

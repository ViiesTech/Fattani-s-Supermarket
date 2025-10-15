/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
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
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const NewPassword = () => {
  const nav = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);

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
            height: responsiveHeight(60),
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
              height: responsiveHeight(42),
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
              title="Enter a New Password!"
              textColor={AppColors.BLACK}
              textSize={3}
              textFontWeight
            />
            <AppText
              title="We Recovered Your Account"
              textColor={AppColors.GRAY}
              textSize={2}
            />
            <LineBreak space={3} />

            <AppTextInput
              inputPlaceHolder="New Password"
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
            <LineBreak space={1} />
            <AppTextInput
              inputPlaceHolder="Confirm Password"
              containerBg={AppColors.WHITE}
              borderRadius={5}
              secureTextEntry={!isShowConfirmPass}
              logo={<SVGXml icon={AppIcons.password} width={20} height={20} />}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              rightIcon={
                <TouchableOpacity
                  onPress={() => setIsShowConfirmPass(!isShowConfirmPass)}
                >
                  <Feather
                    name={isShowConfirmPass ? 'eye' : 'eye-off'}
                    size={responsiveFontSize(2.5)}
                    color={AppColors.GRAY}
                  />
                </TouchableOpacity>
              }
            />

            <LineBreak space={2} />
            <AppButton
              title="Confirm Password"
              btnBackgroundColor={AppColors.darkGreen}
              textColor={AppColors.WHITE}
              handlePress={() => nav.navigate('Login')}
            />

            <LineBreak space={2} />
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewPassword;

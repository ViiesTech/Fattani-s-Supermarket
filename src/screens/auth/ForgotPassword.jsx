/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { AppImages } from '../../assets/images';
import { AppColors, responsiveHeight, responsiveWidth } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../../components/AuthHeader';
import LineBreak from '../../components/LineBreak';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import SVGXml from '../../assets/icons/SVGXML';
import { AppIcons } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
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
            height: responsiveHeight(70),
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
              height: responsiveHeight(35),
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
              title="Forgot Password"
              textColor={AppColors.BLACK}
              textSize={3}
              textFontWeight
            />
            <AppText
              title="We can help to recover your account"
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

            <LineBreak space={2} />
            <AppButton
              title="Next"
              btnBackgroundColor={AppColors.darkGreen}
              textColor={AppColors.WHITE}
              handlePress={() => nav.navigate('EmailVerification')}
            />

            <LineBreak space={2} />
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

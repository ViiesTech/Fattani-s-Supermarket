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
import { useNavigation } from '@react-navigation/native';
import FieldCode from '../../components/CodeField';

const EmailVerification = () => {
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
              title="Enter Verification Code"
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

            <FieldCode
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />

            <LineBreak space={2} />
            <AppButton
              title="Submit"
              btnBackgroundColor={AppColors.darkGreen}
              textColor={AppColors.WHITE}
              handlePress={() => nav.navigate('NewPassword')}
            />

            <LineBreak space={2} />
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmailVerification;

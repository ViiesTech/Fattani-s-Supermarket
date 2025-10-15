/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import AuthHeader from '../../components/AuthHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../utils';
import { AppImages } from '../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../../components/AppText';
import LineBreak from '../../components/LineBreak';
import AppButton from '../../components/AppButton';
import SVGXml from '../../assets/icons/SVGXML';
import { AppIcons } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const nav = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={AppImages.welcome_bg}
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(70),
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              paddingHorizontal: responsiveWidth(4),
            }}
          >
            <AuthHeader />
          </View>
        </SafeAreaView>
      </ImageBackground>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(40),
            backgroundColor: '#F4F5F9',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingHorizontal: responsiveWidth(4),
          }}
        >
          <LineBreak space={3} />
          <AppText
            title={'Welcome'}
            textColor={AppColors.BLACK}
            textSize={3}
            textFontWeight
          />
          <AppText
            title={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy'
            }
            textColor={AppColors.GRAY}
            textSize={2}
          />
          <LineBreak space={3} />
          <AppButton
            title="Continue with google"
            btnBackgroundColor={AppColors.WHITE}
            textColor={AppColors.BLACK}
            leftIcon={<SVGXml icon={AppIcons.google} />}
          />
          <LineBreak space={2} />
          <AppButton
            title="Create an account"
            btnBackgroundColor={AppColors.darkGreen}
            textColor={AppColors.WHITE}
            handlePress={() => nav.navigate('SignUp')}
            leftIcon={<SVGXml icon={AppIcons.account} />}
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
              title={'Already have an account ? '}
              textColor={AppColors.GRAY}
              textSize={2}
            />
            <TouchableOpacity onPress={() => nav.navigate('Login')}>
              <AppText
                title={'Login'}
                textColor={AppColors.BLACK}
                textSize={2}
                textFontWeight
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Welcome;

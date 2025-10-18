/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Container from '../../../components/Container';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import AppHeader from '../../../components/AppHeader';
import LineBreak from '../../../components/LineBreak';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppTextInput from '../../../components/AppTextInput';
import AppButton from '../../../components/AppButton';
import SVGXml from '../../../assets/icons/SVGXML';
import { AppIcons } from '../../../assets/icons';

const EditProfile = () => {
  return (
    <Container
      scrollEnabled={false}
      safeAreaViewStyle={{ backgroundColor: 'transparent' }}
    >
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader onBackPress={true} heading={'Edit Profile'} />

        <LineBreak space={2} />

        <View
          style={{
            backgroundColor: AppColors.LIGHTGRAY,
            width: 130,
            height: 130,
            borderRadius: 100,
            alignSelf: 'center',
          }}
        >
          <View style={{ position: 'absolute', right: 0, bottom: 0 }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: AppColors.darkGreen,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <AntDesign
                name="camera"
                size={responsiveFontSize(2.5)}
                color={AppColors.WHITE}
              />
            </TouchableOpacity>
          </View>
        </View>

        <LineBreak space={4} />

        <View>
          <AppTextInput
            inputPlaceHolder={'Full Name'}
            borderRadius={10}
            containerBg={AppColors.LIGHTGRAY}
            logo={
              <SVGXml icon={AppIcons.account_circle} width={20} height={20} />
            }
          />
          <LineBreak space={1} />
          <AppTextInput
            inputPlaceHolder={'Password'}
            borderRadius={10}
            containerBg={AppColors.LIGHTGRAY}
            logo={<SVGXml icon={AppIcons.lock} width={20} height={20} />}
          />
          <LineBreak space={1} />
          <AppTextInput
            inputPlaceHolder={'Phone Number'}
            borderRadius={10}
            containerBg={AppColors.LIGHTGRAY}
            logo={<SVGXml icon={AppIcons.call} width={20} height={20} />}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: responsiveWidth(5),
        }}
      >
        <AppButton
          title={'Save'}
          btnBackgroundColor={AppColors.darkGreen}
          rightIcon={<SVGXml icon={AppIcons.save} width={20} height={20} />}
        />
      </View>
      <LineBreak space={2} />
    </Container>
  );
};

export default EditProfile;

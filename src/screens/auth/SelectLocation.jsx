/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { AppImages } from '../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import LineBreak from '../../components/LineBreak';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import SVGXml from '../../assets/icons/SVGXML';
import { AppIcons } from '../../assets/icons';

const data = [
  { id: 1, title: 'Home' },
  { id: 2, title: 'Office' },
  { id: 3, title: 'Other' },
];

const SelectLocation = () => {
  const nav = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <ImageBackground source={AppImages.select_location_bg} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            backgroundColor: AppColors.WHITE,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            marginHorizontal: responsiveWidth(4),
            elevation: 5,
          }}
          onPress={() => nav.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={responsiveFontSize(2.5)}
            color={AppColors.BLACK}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View
          style={{
            backgroundColor: AppColors.WHITE,
            width: responsiveWidth(100),
            height: responsiveHeight(35),
            paddingHorizontal: responsiveWidth(4),
          }}
        >
          <LineBreak space={1} />
          <View
            style={{
              width: responsiveWidth(6.5),
              height: responsiveHeight(0.8),
              borderRadius: 100,
              backgroundColor: AppColors.LIGHTGRAY,
              alignSelf: 'center',
            }}
          />
          <LineBreak space={3} />
          <AppTextInput
            inputPlaceHolder={'Search for location'}
            containerBg={AppColors.LIGHTESTGRAY}
            borderRadius={5}
            logo={
              <Feather
                name="search"
                size={responsiveFontSize(2.5)}
                color={AppColors.BLACK}
              />
            }
          />
          <LineBreak space={2} />
          <View>
            <FlatList
              data={data}
              horizontal
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'space-between',
              }}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => setSelectedCategory(index)}>
                  <AppTextInput
                    inputPlaceHolder={item.title}
                    containerBg={AppColors.LIGHTESTGRAY}
                    borderRadius={5}
                    borderWidth={2}
                    borderColor={
                      selectedCategory == index
                        ? AppColors.darkGreen
                        : AppColors.LIGHTESTGRAY
                    }
                    placeholderTextColor={
                      selectedCategory == index
                        ? AppColors.darkGreen
                        : AppColors.GRAY
                    }
                    editable={false}
                    inputTextAlign={'center'}
                    inputWidth={17}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <LineBreak space={2} />
          <AppButton
            title={'Save This Location'}
            btnBackgroundColor={AppColors.darkGreen}
            rightIcon={<SVGXml icon={AppIcons.save} width={20} height={20} />}
            handlePress={() => nav.navigate('PriceRange')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SelectLocation;

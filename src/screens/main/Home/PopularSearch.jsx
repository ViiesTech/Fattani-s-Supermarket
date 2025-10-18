/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Container from '../../../components/Container';
import Feather from 'react-native-vector-icons/Feather';
import AppTextInput from '../../../components/AppTextInput';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import BackIcon from '../../../components/BackIcon';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppText';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: 1, title: 'Rice' },
  { id: 2, title: 'Bread' },
  { id: 3, title: 'Biscuits' },
  { id: 4, title: 'Milk' },
];

const PopularSearch = () => {
  const nav = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Container safeAreaViewStyle={{ backgroundColor: 'transparent' }}>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <BackIcon iconColor={AppColors.ThemeColor} onPress={() => nav.goBack()} />
          <AppTextInput
            inputPlaceHolder={'Search'}
            containerBg={isFocus ? '#F0F1F2' : '#FAFAFA'}
            borderRadius={5}
            placeholderTextColor={
              isFocus ? AppColors.darkGreen : AppColors.GRAY
            }
            inputWidth={62}
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
            borderBottomWidth={1}
            borderBottomColor={isFocus ? AppColors.darkGreen : '#FAFAFA'}
            logo={
              <Feather
                name="search"
                size={responsiveFontSize(2.5)}
                color={AppColors.BLACK}
              />
            }
          />
        </View>

        <LineBreak space={2} />
        <AppText
          title={'Popular Searches'}
          textColor={AppColors.ThemeColor}
          textSize={2.5}
          textFontWeight
        />

        <LineBreak space={2} />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(5),
              borderBottomWidth: 1,
              borderBottomColor: AppColors.LIGHTGRAY,
              paddingVertical: responsiveHeight(2.5),
              paddingHorizontal: responsiveWidth(5),
              backgroundColor: AppColors.WHITE,
            }}
          >
            <Feather
              name="search"
              size={responsiveFontSize(2.5)}
              color={AppColors.BLACK}
            />
            <AppText
              title={item.title}
              textColor={AppColors.ThemeColor}
              textSize={2}
            />
          </View>
        )}
      />
    </Container>
  );
};

export default PopularSearch;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, FlatList } from 'react-native';
import Container from '../../../components/Container';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import AppHeader from '../../../components/AppHeader';
import { AppImages } from '../../../assets/images';
import StepIndicatorCard from '../../../components/StepIndicatorCard';
import AppText from '../../../components/AppText';
import LineBreak from '../../../components/LineBreak';
import AppButton from '../../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const calcData = [
  { id: 1, title: 'Items', price: '03' },
  { id: 2, title: 'Promo Discount', price: '5%' },
  { id: 3, title: 'Delivery Charge', price: 'Free' },
  { id: 4, title: 'Total', price: '230rs' },
];

const CheckOut = () => {
  const nav = useNavigation();
  return (
    <Container safeAreaViewStyle={{ backgroundColor: 'transparent' }}>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader onBackPress={true} heading={'Checkout'} />
        <Image
          source={AppImages.checkout}
          style={{
            width: responsiveWidth(60),
            height: responsiveWidth(60),
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />

        <StepIndicatorCard />

        <LineBreak space={5} />

        <FlatList
          data={calcData}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical:
                  item.id == 4 ? responsiveHeight(1) : responsiveHeight(0.2),
                paddingBottom: item.id == 3 && responsiveHeight(1),
                borderBottomWidth: item.id == 3 ? 1 : 0,
                borderBottomColor: AppColors.BLACK,
              }}
            >
              <AppText
                title={item.title}
                textColor={AppColors.BLACK}
                textSize={item.id == 4 ? 2.5 : 2}
                textFontWeight={item.id == 4 ? true : false}
              />
              <AppText
                title={item.price}
                textColor={AppColors.BLACK}
                textSize={item.id == 4 ? 2.5 : 2}
                textFontWeight={item.id == 4 ? true : false}
              />
            </View>
          )}
        />

        <LineBreak space={2} />

        <AppButton
          title={'Confirm'}
          btnBackgroundColor={AppColors.darkGreen}
          textFontWeight={false}
          handlePress={() => nav.navigate('Main', { screen: 'Home' })}
        />
      </View>
    </Container>
  );
};

export default CheckOut;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import Container from '../../../components/Container';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import HomeHeader from '../../../components/HomeHeader';
import { AppImages } from '../../../assets/images';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppText';
import { useNavigation } from '@react-navigation/native';

const categoryData = [
  {
    id: 1,
    title: 'Fruits & Vegetables',
    image: AppImages.categories_one,
  },
  {
    id: 2,
    title: 'Grocery',
    image: AppImages.categories_two,
  },
  {
    id: 3,
    title: 'Personal care',
    image: AppImages.categories_three,
  },
  {
    id: 4,
    title: 'Meat & Fish',
    image: AppImages.categories_four,
  },
  {
    id: 5,
    title: 'Frozen food',
    image: AppImages.categories_five,
  },
  {
    id: 6,
    title: 'Dairy',
    image: AppImages.categories_six,
  },
];

const SeeAllCategories = () => {
  const nav = useNavigation();
  return (
    <Container safeAreaViewStyle={{ backgroundColor: 'transparent' }}>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <HomeHeader />
        <LineBreak space={2} />
        <FlatList
          data={categoryData}
          numColumns={2}
          ItemSeparatorComponent={<LineBreak space={3} />}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: AppColors.WHITE,
                width: responsiveWidth(42),
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: responsiveHeight(1),
                borderRadius: 10,
              }}
              onPress={() => nav.navigate('PersonalCare')}
            >
              <Image
                source={item.image}
                style={{
                  width: responsiveWidth(35),
                  height: responsiveWidth(35),
                }}
                resizeMode="contain"
              />
              <LineBreak space={0.5} />
              <AppText
                title={item.title}
                textColor={AppColors.ThemeColor}
                textSize={1.8}
                textAlignment={'center'}
                textFontWeight
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <LineBreak space={2} />
    </Container>
  );
};

export default SeeAllCategories;

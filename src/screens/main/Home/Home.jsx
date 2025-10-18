/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import Container from '../../../components/Container';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import HomeHeader from '../../../components/HomeHeader';
import LineBreak from '../../../components/LineBreak';
import AppTextInput from '../../../components/AppTextInput';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppText from '../../../components/AppText';
import { AppImages } from '../../../assets/images';
import HomeBanner from '../../../components/HomeBanner';
import AppButton from '../../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const categoryData = [
  {
    id: 1,
    title: 'Vegetables',
    subTitle: '& Fruits',
    image: AppImages.category_one,
  },
  {
    id: 2,
    title: 'Dairy &',
    subTitle: 'Breakfast',
    image: AppImages.category_two,
  },
  {
    id: 3,
    title: 'Cold Drinks',
    subTitle: '& Juices',
    image: AppImages.category_three,
  },
  {
    id: 4,
    title: 'Instant &',
    subTitle: 'Frozen Food',
    image: AppImages.category_four,
  },
  { id: 5, title: 'Tea &', subTitle: 'Coffee', image: AppImages.category_five },
  {
    id: 6,
    title: 'Atta, Rice',
    subTitle: '& Dal',
    image: AppImages.category_six,
  },
  {
    id: 7,
    title: 'Masala, Oil',
    subTitle: '& Dry Fruits',
    image: AppImages.category_seven,
  },
  {
    id: 8,
    title: 'Chicken',
    subTitle: 'Meat & Fish',
    image: AppImages.category_eight,
  },
];

const productData = [
  {
    id: 1,
    image: AppImages.product_one,
    name: 'Surf Excel Easy Wash Detergent Power',
    volume: '500 ml',
  },
  {
    id: 2,
    image: AppImages.product_two,
    name: 'Surf Excel Easy Wash Detergent Power',
    volume: '500 ml',
  },
];

const Home = () => {
  const nav = useNavigation();
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = index => {
    setSelectedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    );
  };

  return (
    <Container
      safeAreaViewStyle={{
        backgroundColor: 'transparent',
        marginBottom: responsiveHeight(-6),
      }}
    >
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <HomeHeader />
        <LineBreak space={2} />
        <TouchableOpacity onPress={() => nav.navigate('PopularSearch')}>
          <AppTextInput
            inputPlaceHolder={'Search'}
            containerBg={'#FAFAFA'}
            editable={false}
            borderRadius={5}
            logo={
              <Feather
                name="search"
                size={responsiveFontSize(2.5)}
                color={AppColors.BLACK}
              />
            }
          />
        </TouchableOpacity>
        <LineBreak space={3} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <AppText
            title="Shop By Category"
            textColor={AppColors.BLACK}
            textSize={2}
            textFontWeight
          />
          <TouchableOpacity onPress={() => nav.navigate('SeeAllCategories')}>
            <AppText
              title="See All"
              textColor={AppColors.darkGreen}
              textSize={1.8}
            />
          </TouchableOpacity>
        </View>
        <LineBreak space={2} />
        <FlatList
          data={categoryData}
          numColumns={4}
          ItemSeparatorComponent={<LineBreak space={2} />}
          columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => nav.navigate('PersonalCare')}>
              <View
                style={{
                  backgroundColor: `#FAFAFA`,
                  paddingHorizontal: responsiveWidth(2),
                  paddingVertical: responsiveHeight(1),
                  borderRadius: 20,
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: responsiveWidth(17),
                    height: responsiveWidth(17),
                  }}
                  resizeMode="contain"
                />
              </View>
              <LineBreak space={0.5} />
              <AppText
                title={item.title}
                textColor={AppColors.BLACK}
                textSize={1.8}
                textAlignment={'center'}
              />
              <AppText
                title={item.subTitle}
                textColor={AppColors.BLACK}
                textSize={1.8}
                textAlignment={'center'}
              />
            </TouchableOpacity>
          )}
        />
        <LineBreak space={3} />
        <HomeBanner />
        <LineBreak space={3} />
        <FlatList
          data={productData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: responsiveWidth(8) }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                backgroundColor: AppColors.WHITE,
                paddingHorizontal: responsiveWidth(4),
                paddingVertical: responsiveHeight(1.5),
                borderRadius: 10,
              }}
              onPress={() => nav.navigate('ProductDetails')}
            >
              <View
                style={{
                  backgroundColor: `#FAFAFA`,
                  paddingVertical: responsiveHeight(1.5),
                  alignItems: 'center',
                  borderRadius: 10,
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: responsiveWidth(30),
                    height: responsiveWidth(25),
                  }}
                  resizeMode="contain"
                />
                <View
                  style={{
                    position: 'absolute',
                    right: 0,
                    paddingHorizontal: responsiveWidth(4),
                    paddingVertical: responsiveHeight(1),
                  }}
                >
                  <TouchableOpacity onPress={() => toggleSelect(index)}>
                    <FontAwesome
                      name={selectedItems.includes(index) ? 'heart' : 'heart-o'}
                      size={responsiveFontSize(2.5)}
                      color={
                        selectedItems.includes(index)
                          ? AppColors.RED_COLOR
                          : AppColors.BLACK
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <LineBreak space={0.5} />
              <AppText
                title={item.name}
                textColor={AppColors.BLACK}
                textSize={2}
                textwidth={40}
              />
              <LineBreak space={0.5} />
              <AppText
                title={item.volume}
                textColor={AppColors.GRAY}
                textSize={2}
              />

              <View style={{ alignItems: 'flex-end' }}>
                <AppButton
                  title={'Add'}
                  textFontWeight={false}
                  btnBackgroundColor={AppColors.darkGreen}
                  btnWidth={18}
                  borderRadius={10}
                  btnPadding={8}
                  textSize={1.8}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <LineBreak space={4} />
    </Container>
  );
};

export default Home;

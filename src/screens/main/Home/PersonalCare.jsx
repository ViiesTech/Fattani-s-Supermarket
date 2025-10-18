/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import Container from '../../../components/Container';
import AppHeader from '../../../components/AppHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import { AppImages } from '../../../assets/images';
import LineBreak from '../../../components/LineBreak';
import { useNavigation } from '@react-navigation/native';
import AppText from '../../../components/AppText';
import AppButton from '../../../components/AppButton';
import SVGXml from '../../../assets/icons/SVGXML';
import { AppIcons } from '../../../assets/icons';

const data = [
  {
    id: 1,
    image: AppImages.personal_one,
    name: 'Head & shoulder dandruff free',
    price: '600rs',
  },
  {
    id: 2,
    image: AppImages.personal_two,
    name: 'New body mist 130ml',
    price: '240rs',
  },
  {
    id: 3,
    image: AppImages.personal_three,
    name: 'Dove whitening original - 48hr',
    price: '520rs',
  },
  {
    id: 4,
    image: AppImages.personal_four,
    name: 'New Lifebuoy total 1099.9 germs protective',
    price: '398rs',
  },
];

const PersonalCare = () => {
  const nav = useNavigation();
  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader onBackPress={true} heading={'Personal Care'} />
      </View>

      <LineBreak space={4} />

      <FlatList
        data={data}
        numColumns={2}
        ItemSeparatorComponent={<LineBreak space={4} />}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: responsiveWidth(5),
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => nav.navigate("ProductDetails")}
            style={{
              backgroundColor: AppColors.WHITE,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                backgroundColor: `#FAFAFA`,
                paddingHorizontal: responsiveWidth(2),
                paddingVertical: responsiveHeight(1),
                borderRadius: 10,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: responsiveWidth(38),
                  height: responsiveWidth(38),
                }}
                resizeMode="contain"
              />
            </View>
            <LineBreak space={2} />
            <AppText
              title={item.name}
              textColor={AppColors.BLACK}
              textSize={1.8}
              textwidth={35}
              numberOfLines={2}
            />
            <LineBreak space={3} />
            <AppText
              title={item.price}
              textColor={AppColors.orange}
              textSize={1.8}
            />
            <LineBreak space={1} />
            <AppButton
              title={'Add To Bag'}
              btnWidth={42}
              btnBackgroundColor={AppColors.darkGreen}
              textSize={1.5}
              btnPadding={8}
              textFontWeight={false}
              handlePress={() => nav.navigate("ShoppingCart")}
              leftIcon={
                <SVGXml icon={AppIcons.bag_small} width={15} height={15} />
              }
            />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default PersonalCare;

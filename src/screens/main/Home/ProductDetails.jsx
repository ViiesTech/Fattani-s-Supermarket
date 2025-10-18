/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image } from 'react-native';
import Container from '../../../components/Container';
import { AppColors, responsiveWidth } from '../../../utils';
import AppHeader from '../../../components/AppHeader';
import { AppImages } from '../../../assets/images';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppText';
import SVGXml from '../../../assets/icons/SVGXML';
import { AppIcons } from '../../../assets/icons';
import AppButton from '../../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = () => {
  const nav = useNavigation();
  return (
    <Container safeAreaViewStyle={{backgroundColor: 'transparent'}}>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader onBackPress={true} heading={'Product Details'} />
        <LineBreak space={3} />
        <Image
          source={AppImages.product_detail}
          style={{
            alignSelf: 'center',
            width: responsiveWidth(75),
            height: responsiveWidth(75),
          }}
          resizeMode="contain"
        />
        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(2),
            alignItems: 'center',
          }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: AppColors.darkGreen,
              borderRadius: 10,
              padding: responsiveWidth(1),
            }}
          >
            <Image
              source={AppImages.product_detail}
              style={{
                width: responsiveWidth(15),
                height: responsiveWidth(15),
                alignSelf: 'center',
              }}
              resizeMode="contain"
            />
          </View>
          <AppText
            title={'Milano new body mist'}
            textColor={AppColors.BLACK}
            textSize={2.2}
            textFontWeight
          />
        </View>

        <LineBreak space={2} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <AppText
            title={'130ml'}
            textColor={AppColors.ThemeColor}
            textSize={3}
            textFontWeight
          />
          <AppText
            title={'240rs'}
            textColor={AppColors.darkGreen}
            textSize={3}
            textFontWeight
          />
        </View>

        <LineBreak space={2} />

        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(2),
            alignItems: 'center',
          }}
        >
          <SVGXml icon={AppIcons.menu_two} width={20} height={20} />
          <AppText
            title={'personal care Product'}
            textColor={AppColors.ThemeColor}
            textSize={2.2}
          />
        </View>
        <LineBreak space={2} />

        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(2),
          }}
        >
          <SVGXml icon={AppIcons.menu_one} width={20} height={20} />
          <AppText
            title={
              'all products which are used are safe to your body it not be harmful for body.'
            }
            textColor={AppColors.GRAY}
            textSize={2.2}
            lineHeight={2.7}
            textwidth={70}
          />
        </View>
        <LineBreak space={4} />

         <AppButton
              title={'Add To Bag'}
              btnBackgroundColor={AppColors.darkGreen}
              textFontWeight={false}
              handlePress={() => nav.navigate("ShoppingCart")}
              rightIcon={
                <SVGXml icon={AppIcons.bag_small} width={20} height={20} />
              }
            />
      </View>
    </Container>
  );
};

export default ProductDetails;

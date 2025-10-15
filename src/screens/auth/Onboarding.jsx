/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { View, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { AppImages } from '../../assets/images/index';
import { responsiveHeight, responsiveWidth } from '../../utils/index';
import AppText from '../../components/AppText';
import { AppColors } from '../../utils/index';
import AppButton from '../../components/AppButton';
import LineBreak from '../../components/LineBreak';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const nav = useNavigation();

  const slides = [
    {
      key: 1,
      title: 'Welcome to',
      detail:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      bg: AppImages.onboarding_one,
    },
    {
      key: 2,
      title: 'Buy Quality Dairy Products',
      detail:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      bg: AppImages.onboarding_two,
    },
    {
      key: 3,
      title: 'Buy Premium Quality Fruits',
      detail:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      bg: AppImages.onboarding_three,
    },
    {
      key: 4,
      title: 'Get Discounts On All Products',
      detail:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      bg: AppImages.onboarding_four,
    },
  ];

  const renderDots = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(4),
      }}
    >
      {slides.map((_, index) => (
        <View
          key={index}
          style={{
            width: 8,
            height: 8,
            borderRadius: 100,
            backgroundColor:
              index === currentIndex ? AppColors.darkGreen : AppColors.LIGHTGRAY,
            marginHorizontal: responsiveWidth(0.7),
          }}
        />
      ))}
    </View>
  );

  const renderItem = ({ item }) => (
    <ImageBackground
      source={item.bg}
      style={{
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        paddingTop: responsiveHeight(5),
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: responsiveWidth(5),
            flex: 1,
          }}
        >
          <AppText
            title={item.title}
            textColor={AppColors.BLACK}
            textSize={3.5}
            textFontWeight
            textAlignment={'center'}
            textTransform={'capitalize'}
          />
          <LineBreak space={5} />
          <AppText
            title={item.detail}
            textColor={AppColors.GRAY}
            textSize={2}
            lineHeight={3}
            textAlignment={'center'}
          />
        </View>
        <View style={{ paddingHorizontal: responsiveWidth(5) }}>
          <View>{renderDots()}</View>
          <LineBreak space={3} />
          <View>{renderCustomButtons()}</View>
          <LineBreak space={4} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      sliderRef.current?.goToSlide(currentIndex + 1, true);
    }
  };

  const handleDone = () => {
    nav.navigate('Welcome');
  };

  const renderCustomButtons = () => {
    if (currentIndex === 0) {
      return (
        <AppButton
          title="Continue"
          textColor={AppColors.WHITE}
          btnBackgroundColor={AppColors.darkGreen}
          handlePress={handleNext}
          textFontWeight={false}
        />
      );
    }

    if (currentIndex === 1) {
      return (
        <AppButton
          title="Continue"
          textColor={AppColors.WHITE}
          btnBackgroundColor={AppColors.darkGreen}
          handlePress={handleNext}
          textFontWeight={false}
        />
      );
    }

    if (currentIndex === 2) {
      return (
        <AppButton
          title="Continue"
          textColor={AppColors.WHITE}
          btnBackgroundColor={AppColors.darkGreen}
          handlePress={handleNext}
          textFontWeight={false}
        />
      );
    }

    if (currentIndex === 3) {
      return (
        <AppButton
          title="Get Started"
          textColor={AppColors.WHITE}
          btnBackgroundColor={AppColors.darkGreen}
          handlePress={handleDone}
          textFontWeight={false}
        />
      );
    }

    return null;
  };

  return (
    <View style={{ flex: 1 }}>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={renderItem}
        onSlideChange={index => setCurrentIndex(index)}
        showNextButton={false}
        showSkipButton={false}
        showDoneButton={false}
        dotStyle={{ display: 'none' }}
        activeDotStyle={{ display: 'none' }}
      />
    </View>
  );
};

export default OnBoarding;

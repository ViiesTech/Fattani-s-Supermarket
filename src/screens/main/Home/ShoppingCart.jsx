/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Container from '../../../components/Container';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import AppHeader from '../../../components/AppHeader';
import { AppImages } from '../../../assets/images';
import AppText from '../../../components/AppText';
import LineBreak from '../../../components/LineBreak';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../../components/AppButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RemoveItemModal from '../../../components/RemoveItemModal';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: 1, image: AppImages.cart_one, name: 'Fresh Broccoli', weight: '2kg' },
  { id: 2, image: AppImages.cart_two, name: 'Black Grapes', weight: '15kg' },
  { id: 3, image: AppImages.cart_three, name: 'Avacoda', weight: '5pcs' },
  { id: 4, image: AppImages.cart_four, name: 'Pineapple', weight: 'dozen' },
];

const calcData = [
  { id: 1, title: 'Subtotal', price: '1360rs' },
  { id: 2, title: 'Shipping charges', price: '160rs' },
  { id: 3, title: 'Total', price: '1520rs' },
];

const ShoppingCart = () => {
  const translateXRefs = useRef(data.map(() => new Animated.Value(0))).current;
  const [activeIndex, setActiveIndex] = useState(null);
  const [counts, setCounts] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();

  const handleIncrement = idx => {
    setCounts(prev => ({
      ...prev,
      [idx]: (prev[idx] || 1) + 1,
    }));
  };

  const handleDecrement = idx => {
    setCounts(prev => ({
      ...prev,
      [idx]: prev[idx] > 1 ? prev[idx] - 1 : 1,
    }));
  };

  const handlePress = index => {
    if (activeIndex !== null && activeIndex !== index) {
      Animated.timing(translateXRefs[activeIndex], {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    const isActive = activeIndex === index;
    Animated.timing(translateXRefs[index], {
      toValue: isActive ? 0 : -30,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setActiveIndex(isActive ? null : index);
  };

  return (
    <Container safeAreaViewStyle={{ backgroundColor: 'transparent' }}>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader onBackPress={true} heading={'Shopping Cart'} />
        <LineBreak space={2} />
        <RemoveItemModal
          visible={modalVisible}
          itemName="Avocado"
          itemQty={5}
          onClose={() => {
            setModalVisible(false);
            setActiveIndex(null);
          }}
          onRemove={() => {
            // handle remove logic
            setModalVisible(false);
            setActiveIndex(null);
          }}
        />
        ;
        <FlatList
          data={data}
          ItemSeparatorComponent={<LineBreak space={3} />}
          renderItem={({ item, index }) => (
            <Animated.View
              style={{
                transform: [{ translateX: translateXRefs[index] }],
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                onPress={() => handlePress(index)}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: responsiveWidth(4),
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: responsiveWidth(18),
                      height: responsiveWidth(18),
                    }}
                    resizeMode="contain"
                  />
                  <View>
                    <AppText
                      title={item.name}
                      textColor={AppColors.BLACK}
                      textSize={2}
                      textFontWeight
                    />
                    <AppText
                      title={item.weight}
                      textColor={AppColors.GRAY}
                      textSize={1.8}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: responsiveWidth(10),
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: responsiveHeight(0.5),
                    }}
                  >
                    <TouchableOpacity onPress={() => handleIncrement(index)}>
                      <Feather
                        name="plus"
                        size={responsiveFontSize(2.5)}
                        color={AppColors.darkGreen}
                      />
                    </TouchableOpacity>
                    <AppText
                      title={`${counts[index] || 1}`}
                      textColor={AppColors.GRAY}
                      textSize={2}
                    />
                    <TouchableOpacity onPress={() => handleDecrement(index)}>
                      <Feather
                        name="minus"
                        size={responsiveFontSize(2.5)}
                        color={AppColors.darkGreen}
                      />
                    </TouchableOpacity>
                  </View>
                  {activeIndex === index && (
                    <>
                      <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={{
                          backgroundColor: '#FA52521A',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: responsiveWidth(15),
                          height: responsiveHeight(8),
                          borderRadius: 10,
                          gap: 5,
                        }}
                      >
                        <AntDesign
                          name={'delete'}
                          size={responsiveFontSize(2.5)}
                          color={AppColors.BTNCOLOURS}
                        />
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </TouchableOpacity>
            </Animated.View>
          )}
        />
        <LineBreak space={10} />
        <FlatList
          data={calcData}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical:
                  item.id == 3 ? responsiveHeight(3) : responsiveHeight(0.2),
              }}
            >
              <AppText
                title={item.title}
                textColor={item.id == 3 ? AppColors.BLACK : AppColors.GRAY}
                textSize={item.id == 3 ? 2.5 : 2}
                textFontWeight={item.id == 3 ? true : false}
              />
              <AppText
                title={item.price}
                textColor={item.id == 3 ? AppColors.BLACK : AppColors.GRAY}
                textSize={item.id == 3 ? 2.5 : 2}
                textFontWeight={item.id == 3 ? true : false}
              />
            </View>
          )}
        />
        <AppButton
          title={'Check out'}
          btnBackgroundColor={AppColors.darkGreen}
          textFontWeight={false}
          handlePress={() => nav.navigate('CheckOut')}
        />
      </View>
      <LineBreak space={2} />
    </Container>
  );
};

export default ShoppingCart;

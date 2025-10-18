/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import Container from '../../../components/Container';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import AppText from '../../../components/AppText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LineBreak from '../../../components/LineBreak';
import AppTextInput from '../../../components/AppTextInput';
import AppButton from '../../../components/AppButton';
import SVGXml from '../../../assets/icons/SVGXML';
import { AppIcons } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: 1, title: 'Dairy Products' },
  { id: 2, title: 'Foods' },
  { id: 3, title: 'Vegetables' },
  { id: 4, title: 'Snacks' },
  { id: 5, title: 'Healthcare' },
  { id: 6, title: 'Others' },
];

const PriceRange = () => {
  const nav = useNavigation();
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = index => {
    setSelectedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    );
  };

  const handleCheckAll = () => {
    if (selectedItems.length === data.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data.map((_, index) => index));
    }
  };

  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <AppText
            title={'Price Range'}
            textColor={AppColors.ThemeColor}
            textSize={2.5}
            textFontWeight
          />

          <TouchableOpacity onPress={() => nav.navigate("Main")}>
            <AntDesign
              name="close"
              size={responsiveFontSize(2.5)}
              color={AppColors.ThemeColor}
            />
          </TouchableOpacity>
        </View>

        <LineBreak space={2} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <AppTextInput
            inputPlaceHolder={'Minimum'}
            containerBg={`#F0F1F2`}
            inputHeight={5.5}
            borderRadius={10}
            inputWidth={32}
            fontSize={2.5}
            keyboardType={'numeric'}
            textAlignVertical={'center'}
          />
          <AppText
            title={'-'}
            textColor={AppColors.ThemeColor}
            textSize={4}
            textFontWeight
          />
          <AppTextInput
            inputPlaceHolder={'Maximum'}
            containerBg={`#F0F1F2`}
            inputHeight={5.5}
            borderRadius={10}
            inputWidth={32}
            fontSize={2.5}
            keyboardType={'numeric'}
            textAlignVertical={'center'}
          />
        </View>

        <LineBreak space={3} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <AppText
            title={'Categories'}
            textColor={AppColors.ThemeColor}
            textSize={2.5}
            textFontWeight
          />

          <AppButton
            title={
              selectedItems.length === data.length ? 'Uncheck All' : 'Check All'
            }
            textFontWeight={false}
            btnBackgroundColor={AppColors.lighttest_green}
            textColor={AppColors.darkGreen}
            btnWidth={22}
            borderRadius={100}
            btnPadding={4}
            handlePress={handleCheckAll}
            textSize={1.7}
          />
        </View>
      </View>

      <LineBreak space={2} />

      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: AppColors.LIGHTGRAY,
              paddingHorizontal: responsiveWidth(5),
              paddingVertical: responsiveHeight(2),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <AppText
              title={item.title}
              textColor={
                selectedItems.includes(index)
                  ? AppColors.darkGreen
                  : AppColors.ThemeColor
              }
              textSize={2}
              textFontWeight
            />

            <TouchableOpacity onPress={() => toggleSelect(index)}>
              <SVGXml
                icon={
                  selectedItems.includes(index)
                    ? AppIcons.checkbox_fill
                    : AppIcons.checkbox_blank
                }
                width={20}
                height={20}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </Container>
  );
};

export default PriceRange;

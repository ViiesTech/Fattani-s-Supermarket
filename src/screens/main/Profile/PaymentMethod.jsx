/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Container from '../../../components/Container';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import AppHeader from '../../../components/AppHeader';
import { AppIcons } from '../../../assets/icons';
import LineBreak from '../../../components/LineBreak';
import { useNavigation } from '@react-navigation/native';
import SVGXml from '../../../assets/icons/SVGXML';
import AppText from '../../../components/AppText';

const data = [
  {
    id: 1,
    icon: AppIcons.card,
    title: 'Credit / Debit Card',
    navTo: '',
  },
  { id: 2, icon: AppIcons.online, title: 'Online Payment', navTo: '' },
  { id: 3, icon: AppIcons.cash, title: 'Cash on Delivery', navTo: '' },
];

const PaymentMethod = () => {
  const nav = useNavigation();
  return (
    <Container safeAreaViewStyle={{ backgroundColor: 'transparent' }}>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader onBackPress={true} heading={'Payment Method'} />
      </View>

      <LineBreak space={3} />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              gap: responsiveWidth(4),
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: AppColors.LIGHTGRAY,
              paddingVertical: responsiveHeight(2.5),
              paddingHorizontal: responsiveWidth(5),
            }}
            onPress={() => {
              if (item.navTo) {
                nav.navigate(item.navTo);
              }
            }}
          >
            <SVGXml icon={item.icon} width={20} height={20} />
            <AppText
              title={item.title}
              textColor={AppColors.ThemeColor}
              textSize={2}
            />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default PaymentMethod;

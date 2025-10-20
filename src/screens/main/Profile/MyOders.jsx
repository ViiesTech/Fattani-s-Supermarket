/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import Container from '../../../components/Container';
import AppHeader from '../../../components/AppHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import AppText from '../../../components/AppText';
import { AppImages } from '../../../assets/images';
import LineBreak from '../../../components/LineBreak';
import SVGXml from '../../../assets/icons/SVGXML';
import { AppIcons } from '../../../assets/icons';

const data = [
  { id: 1, title: 'Ongoing' },
  { id: 2, title: 'History' },
];

const history = [
  {
    id: 1,
    title: 'Order #345',
    price: '700rs',
    status: 'Delivered',
    date: 'October 26, 2014',
  },
  {
    id: 2,
    title: 'Order #365',
    price: '452rs',
    status: 'Cancelled',
    date: 'May 26, 2016',
  },
  {
    id: 3,
    title: 'Order #315',
    price: '281rs',
    status: 'Delivered',
    date: 'July 26, 2017',
  },
];

const MyOders = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container safeAreaViewStyle={{ backgroundColor: 'transparent' }}>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader onBackPress={true} heading={'Orders'} />
      </View>
      <LineBreak space={3} />
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: AppColors.LIGHTGRAY,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setSelectedTab(index)}>
            <AppText
              title={item.title}
              textColor={
                selectedTab == index
                  ? AppColors.darkGreen
                  : AppColors.ThemeColor
              }
              textSize={1.8}
              borderBottomWidth={4}
              paddingBottom={1}
              borderBottomColor={
                selectedTab == index ? AppColors.darkGreen : 'transparent'
              }
              textwidth={40}
              textAlignment={'center'}
            />
          </TouchableOpacity>
        )}
      />

      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        {selectedTab == 0 && (
          <View style={{ alignItems: 'center' }}>
            <LineBreak space={10} />
            <Image
              source={AppImages.no_order}
              style={{
                width: responsiveWidth(90),
                height: responsiveWidth(90),
              }}
              resizeMode="contain"
            />
            <LineBreak space={4} />
            <AppText
              title={
                'There is n ongoing order right now. You can order from home'
              }
              textColor={AppColors.ThemeColor}
              textSize={2}
              textwidth={70}
              textAlignment={'center'}
            />
          </View>
        )}

        {selectedTab == 1 && (
          <FlatList
            data={history}
            ListHeaderComponent={<LineBreak space={1} />}
            renderItem={({ item }) => (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: AppColors.LIGHTGRAY,
                  paddingVertical: responsiveHeight(2),
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: responsiveWidth(4),
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: AppColors.darkGreen,
                        width: responsiveWidth(12),
                        height: responsiveWidth(12),
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <SVGXml icon={AppIcons.shopping} width={25} height={25} />
                    </View>

                    <View>
                      <AppText
                        title={item.title}
                        textColor={AppColors.ThemeColor}
                        textSize={2.2}
                        textFontWeight
                      />
                      <LineBreak space={0.3} />
                      <AppText
                        title={item.status}
                        textColor={
                          item.status === 'Cancelled'
                            ? AppColors.RED_COLOR
                            : AppColors.darkGreen
                        }
                        textSize={2}
                      />
                      <LineBreak space={0.3} />
                      <AppText
                        title={item.date}
                        textColor={AppColors.GRAY}
                        textSize={2}
                      />
                    </View>
                  </View>
                  <AppText
                    title={item.price}
                    textColor={AppColors.darkGreen}
                    textFontWeight
                    textSize={2}
                  />
                </View>
              </View>
            )}
          />
        )}
      </View>
    </Container>
  );
};

export default MyOders;

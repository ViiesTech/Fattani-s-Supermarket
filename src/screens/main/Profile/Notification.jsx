/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList } from 'react-native';
import Container from '../../../components/Container';
import AppHeader from '../../../components/AppHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import { AppIcons } from '../../../assets/icons';
import SVGXml from '../../../assets/icons/SVGXML';
import AppText from '../../../components/AppText';
import LineBreak from '../../../components/LineBreak';

const data = [
  {
    id: 1,
    title: 'Order #345',
    subTitle: 'Your Order is Confirmed. Please check everything is okay',
    time: '3:57 PM',
    status: 'Confirmed',
  },
  {
    id: 2,
    title: 'Order #345',
    subTitle: 'Your Order is Delivering to your home',
    time: '3:57 PM',
    status: 'Delivering',
  },
  {
    id: 3,
    title: 'Order #345',
    subTitle: 'Your Order is Confirmed. Please check everything is okay',
    time: '3:57 PM',
    status: 'Confirmed',
  },
  {
    id: 4,
    title: 'Order #345',
    subTitle: 'Your Order is Completed. Please  rate the experince',
    time: '3:57 PM',
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Order #345',
    subTitle: 'Your Order is Confirmed. Please check everything is okay',
    time: '3:57 PM',
    status: 'Confirmed',
  },
];

const Notification = () => {
  return (
    <Container safeAreaViewStyle={{ backgroundColor: 'transparent' }}>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader onBackPress={true} heading={'Notifications'} />

        <FlatList
          data={data}
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
                  <View>
                    <AppText
                      title={item.title}
                      textColor={AppColors.ThemeColor}
                      textSize={2.2}
                      textFontWeight
                    />
                    <LineBreak space={0.3} />
                    <AppText
                      title={item.subTitle}
                      textColor={AppColors.ThemeColor}
                      textSize={2}
                      textwidth={60}
                    />
                  </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <AppText
                    title={item.time}
                    textColor={AppColors.darkGreen}
                    textSize={1.8}
                  />
                  <View
                    style={{
                      backgroundColor:
                        item.status === 'Confirmed'
                          ? AppColors.darkGreen
                          : item.status === 'Completed'
                          ? AppColors.darkGreen
                          : '#36B37E',
                      width: responsiveWidth(10),
                      height: responsiveWidth(10),
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <SVGXml
                      icon={
                        item.status === 'Confirmed'
                          ? AppIcons.confirmed
                          : item.status === 'Completed'
                          ? AppIcons.completed
                          : AppIcons.delivery
                      }
                      width={20}
                      height={20}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </Container>
  );
};

export default Notification;

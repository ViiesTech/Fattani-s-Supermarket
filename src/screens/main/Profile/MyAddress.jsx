/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Container from './../../../components/Container';
import { AppColors, responsiveFontSize, responsiveWidth } from '../../../utils';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppText';
import LineBreak from '../../../components/LineBreak';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../../components/AppButton';
import Feather from 'react-native-vector-icons/Feather';

const data = [
  { id: 1, title: 'Home', subTitle: '51/5A, Road: 7,' },
  { id: 2, title: 'Work', subTitle: 'Technologies Ltd' },
];

const MyAddress = () => {
  return (
    <Container
      scrollEnabled={false}
      safeAreaViewStyle={{ backgroundColor: 'transparent' }}
    >
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader onBackPress={true} heading={'My Addresses'} />

        <FlatList
          data={data}
          ItemSeparatorComponent={<LineBreak space={1} />}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                <AppText
                  title={item.title}
                  textColor={AppColors.ThemeColor}
                  textSize={2}
                  textFontWeight
                />
                <AppText
                  title={item.subTitle}
                  textColor={AppColors.ThemeColor}
                  textSize={2}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: responsiveWidth(4),
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: AppColors.darkGreen,
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <MaterialIcons
                    name={'edit'}
                    size={responsiveFontSize(2.2)}
                    color={AppColors.WHITE}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: AppColors.RED_COLOR,
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign
                    name={'delete'}
                    size={responsiveFontSize(2.2)}
                    color={AppColors.WHITE}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: responsiveWidth(5),
        }}
      >
        <AppButton
          title={'Add New Address'}
          btnBackgroundColor={AppColors.darkGreen}
          rightIcon={
            <Feather
              name="plus"
              size={responsiveFontSize(2.5)}
              color={AppColors.WHITE}
            />
          }
        />
      </View>
    </Container>
  );
};

export default MyAddress;

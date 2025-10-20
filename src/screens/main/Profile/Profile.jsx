/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Container from '../../../components/Container';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import AppText from '../../../components/AppText';
import LineBreak from '../../../components/LineBreak';
import { AppIcons } from '../../../assets/icons';
import SVGXml from '../../../assets/icons/SVGXML';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const data = [
  {
    id: 1,
    icon: AppIcons.edit_profile,
    title: 'Edit Profile',
    navTo: 'EditProfile',
  },
  { id: 2, icon: AppIcons.my_address, title: 'My Address', navTo: 'MyAddress' },
  { id: 3, icon: AppIcons.my_orders, title: 'My Orders', navTo: 'MyOders' },
  {
    id: 4,
    icon: AppIcons.my_wishlist,
    title: 'My Wishlist',
    navTo: 'PaymentMethod',
  },
  {
    id: 5,
    icon: AppIcons.chat_with,
    title: 'Chat with us',
    navTo: 'ChatWithUs',
  },
  { id: 6, icon: AppIcons.talk_to, title: 'Talk to our Support', navTo: '' },
  { id: 7, icon: AppIcons.mail_to, title: 'Mail to us', navTo: '' },
  {
    id: 8,
    icon: AppIcons.facebook,
    title: 'Message to facebook page',
    navTo: '',
  },
  {
    id: 9,
    icon: AppIcons.bag_small,
    title: 'Notifications',
    navTo: 'Notification',
  },
  { id: 10, icon: AppIcons.logout, title: 'Log out', navTo: '' },
];

const Profile = () => {
  const nav = useNavigation();
  return (
    <Container
      safeAreaViewStyle={{
        backgroundColor: 'transparent',
        marginBottom: responsiveHeight(-6),
      }}
    >
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppText
          title={'More'}
          textColor={AppColors.ThemeColor}
          textSize={2.5}
          textFontWeight
        />

        <LineBreak space={3} />

        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(4),
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: AppColors.LIGHTGRAY,
              width: 50,
              height: 50,
              borderRadius: 100,
            }}
          />

          <View>
            <AppText
              title={'vyz'}
              textColor={AppColors.ThemeColor}
              textSize={2}
              textFontWeight
            />

            <AppText
              title={'XXXXXXXXXXXX'}
              textColor={AppColors.ThemeColor}
              textSize={1.8}
            />
          </View>
        </View>

        <LineBreak space={3} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
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
            {index == 8 ? (
              <Feather
                name="bell"
                size={responsiveFontSize(2.5)}
                color={AppColors.BLACK}
              />
            ) : (
              <SVGXml icon={item.icon} width={20} height={20} />
            )}
            <AppText
              title={item.title}
              textColor={AppColors.ThemeColor}
              textSize={2}
            />
          </TouchableOpacity>
        )}
      />
      <LineBreak space={2} />
    </Container>
  );
};

export default Profile;

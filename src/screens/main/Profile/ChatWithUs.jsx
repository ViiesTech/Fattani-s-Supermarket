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
import AppHeader from '../../../components/AppHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import ChatInput from '../../../components/ChatInput';
import LiveChatScreen from '../../../components/LiveChatScreen';
import ChatHeader from '../../../components/ChatHeader';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppText';

const suggestOptData = [
  { id: 1, title: 'I want a Refund' },
  { id: 2, title: 'The Delivery isn’t good' },
  { id: 3, title: 'The Delivery isn’t good' },
  { id: 4, title: 'Delivery is late' },
];

const ChatWithUs = () => {
  return (
    <Container
      scrollEnabled={false}
      safeAreaViewStyle={{ flex: 1, backgroundColor: 'transparent' }}
    >
      <View style={{ flex: 1, paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader
          onBackPress={true}
          heading={'Chat with us'}
          rightIcon={
            <TouchableOpacity>
              <Entypo
                name="dots-three-horizontal"
                size={responsiveFontSize(2.5)}
                color={AppColors.ThemeColor}
              />
            </TouchableOpacity>
          }
        />

        <ChatHeader
          item={{
            id: 1,
            title: 'Order #345',
            price: '700rs',
            status: 'Delivered',
            date: 'October 26, 2014',
          }}
        />

        <LineBreak space={1} />

        <LiveChatScreen />

        <View>
          <FlatList
            data={suggestOptData}
            contentContainerStyle={{ alignItems: 'center' }}
            ItemSeparatorComponent={<LineBreak space={1.5} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: AppColors.darkGreen,
                  alignItems: 'center',
                  paddingVertical: responsiveHeight(1),
                  paddingHorizontal: responsiveWidth(6),
                  borderRadius: 100,
                }}
              >
                <AppText
                  title={item.title}
                  textColor={AppColors.WHITE}
                  textSize={2}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <LineBreak space={2} />

      <View
        style={{
          justifyContent: 'flex-end',
          paddingHorizontal: responsiveWidth(5),
        }}
      >
        <ChatInput />
      </View>
    </Container>
  );
};

export default ChatWithUs;

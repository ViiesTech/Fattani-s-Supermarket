/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import Container from './../../../components/Container';
import { responsiveWidth } from '../../../utils';
import AppHeader from '../../../components/AppHeader';

const MyAddress = () => {
  return (
    <Container scrollEnabled={false} safeAreaViewStyle={{ backgroundColor: 'transparent' }}>
      <View style={{ paddingHorizontal: responsiveWidth(5) }}>
        <AppHeader onBackPress={true} heading={'My Addresses'} />
      </View>
    </Container>
  );
};

export default MyAddress;

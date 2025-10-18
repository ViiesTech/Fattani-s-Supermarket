/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Image, View } from 'react-native'
import { AppColors, responsiveHeight, responsiveWidth } from '../utils'
import AppText from './AppText'
import AppButton from './AppButton'
import { AppImages } from '../assets/images'

const HomeBanner = () => {
    return (
        <View
            style={{
                backgroundColor: AppColors.lowestGreen,
                flexDirection: 'row',
                paddingHorizontal: responsiveWidth(4),
                borderRadius: 15,
            }}>
            <View style={{
                justifyContent: 'space-between',
                paddingVertical: responsiveHeight(2),
            }}>
                <View>
                    <AppText
                        title="World Food Festival,"
                        textColor={AppColors.BLACK}
                        textSize={2}
                        textFontWeight
                    />
                    <AppText
                        title="Bring the world to"
                        textColor={AppColors.BLACK}
                        textSize={2}
                        textFontWeight
                    />
                    <AppText
                        title="your Kitchen!"
                        textColor={AppColors.BLACK}
                        textSize={2}
                        textFontWeight
                    />
                </View>

                <AppButton
                    title={'Shop Now'}
                    textFontWeight={false}
                    btnBackgroundColor={AppColors.darkGreen}
                    btnWidth={30}
                    borderRadius={10}
                    btnPadding={10}
                    textSize={1.8}
                />
            </View>
            <View style={{
                paddingTop: responsiveHeight(2), flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end',
                paddingRight: responsiveWidth(8),
            }}>
                <Image source={AppImages.drink}
                    style={{
                        width: responsiveWidth(24),
                        height: responsiveHeight(20)
                    }}
                    resizeMode='contain'
                />
            </View>
        </View>
    );
};

export default HomeBanner;
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { AppColors, responsiveFontSize, responsiveWidth } from '../utils';
import AppText from './AppText';
import SVGXml from '../assets/icons/SVGXML';
import { AppIcons } from '../assets/icons';

const HomeHeader = () => {
    return (
        <View style={{ flexDirection: 'row', gap: responsiveWidth(2), alignItems: 'center' }}>
            <View style={{
                backgroundColor: AppColors.darkGreen,
                width: responsiveWidth(13),
                height: responsiveWidth(13),
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Octicons
                    name="location"
                    size={responsiveFontSize(2.5)}
                    color={AppColors.WHITE}
                />
            </View>
            <AppText
                title="Your Location"
                textColor={AppColors.GRAY}
                textSize={1.8}
            />

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity>
                    <SVGXml icon={AppIcons.arrow_forword} width={20} height={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeHeader
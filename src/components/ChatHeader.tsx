/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, } from 'react-native'
import { AppColors, responsiveHeight, responsiveWidth } from '../utils'
import SVGXml from '../assets/icons/SVGXML'
import { AppIcons } from '../assets/icons'
import AppText from './AppText'
import LineBreak from './LineBreak'

const ChatHeader = ({ item }: any) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#F5E8DB',
                paddingHorizontal: responsiveWidth(4),
                paddingVertical: responsiveHeight(1),
                borderRadius: 10
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
    )
}

export default ChatHeader
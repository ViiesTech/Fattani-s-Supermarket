/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import AppTextInput from './AppTextInput'
import { AppColors, responsiveFontSize, responsiveWidth } from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatInput = () => {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View>
            <AppTextInput
                inputPlaceHolder={'Enter Your Message'}
                inputWidth={55}
                borderRadius={10}
                placeholderTextColor={
                    isFocus ? AppColors.darkGreen : AppColors.GRAY
                }
                onBlur={() => setIsFocus(false)}
                onFocus={() => setIsFocus(true)}
                borderBottomWidth={1}
                containerBg={isFocus ? '#F0F1F2' : '#F0F1F2'}
                borderBottomColor={isFocus ? AppColors.darkGreen : null}
                borderColor={AppColors.LIGHTGRAY}
                rightIcon={
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: responsiveWidth(5),
                        }}
                    >
                        <TouchableOpacity>
                            <FontAwesome
                                name="video-camera"
                                size={responsiveFontSize(2.2)}
                                color={AppColors.ThemeColor}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome
                                name="image"
                                size={responsiveFontSize(2.2)}
                                color={AppColors.ThemeColor}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <TouchableOpacity
                            >
                                <Ionicons
                                    name="send"
                                    size={responsiveFontSize(2.2)}
                                    color={AppColors.ThemeColor}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    )
}

export default ChatInput
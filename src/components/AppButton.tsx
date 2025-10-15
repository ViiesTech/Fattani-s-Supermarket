/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AppColors, responsiveWidth } from '../utils/index';
import AppText from './AppText';

type Props = {
  title?: any;
  handlePress?: () => void;
  textColor?: any;
  textFontWeight?: boolean;
  textSize?: any;
  btnWidth?: any;
  btnBackgroundColor?: any;
  btnPadding?: any;
  borderWidth?: any;
  borderColor?: any;
  borderRadius?: any;
  leftIcon?: any;
  rightIcon?: any;
  activeOpacity?: any;
  elevation?: any;
};

const AppButton = ({
  title,
  handlePress,
  leftIcon,
  rightIcon,
  borderRadius,
  borderWidth,
  borderColor,
  btnPadding,
  btnBackgroundColor,
  btnWidth,
  textColor = AppColors.WHITE,
  textFontWeight = true,
  textSize = 2.2,
  activeOpacity,
  elevation,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={activeOpacity || 0.8}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // center text
        paddingVertical: btnPadding ?? 14,
        borderRadius: borderRadius ?? 5,
        width: btnWidth ? responsiveWidth(btnWidth) : 'auto',
        borderWidth: borderWidth || 0,
        borderColor: borderColor ?? 'transparent',
        backgroundColor: btnBackgroundColor ?? AppColors.ThemeColor,
        elevation: elevation ? elevation : 5,
      }}
    >
      {/* Left icon container - absolutely positioned */}
      {leftIcon && (
        <View
          style={{
            position: 'absolute',
            left: responsiveWidth(5),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {leftIcon}
        </View>
      )}

      {/* Center text */}
      <AppText
        textColor={textColor}
        textSize={textSize}
        title={title}
        textFontWeight={textFontWeight}
      />

      {/* Right icon container - absolutely positioned */}
      {rightIcon && (
        <View
          style={{
            position: 'absolute',
            right: responsiveWidth(5),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

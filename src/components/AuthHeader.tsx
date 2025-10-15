/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View } from 'react-native'
import BackIcon from './BackIcon'
import { useNavigation } from '@react-navigation/native'
import AppText from './AppText'
import { AppColors } from '../utils'

const AuthHeader = () => {
    const nav = useNavigation();
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <BackIcon onPress={() => nav.goBack()} />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <AppText
                    title={'Welcome'}
                    textColor={AppColors.WHITE}
                    textSize={2.5}
                />
            </View>
        </View>
    )
}

export default AuthHeader
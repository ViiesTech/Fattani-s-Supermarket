/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppColors, responsiveHeight } from '../utils'

type props = {
    children: ReactNode,
    scrollEnabled?: boolean,
    image?: any,
    showScrollBar?: boolean,
    paddingBottom?: any,
    safeAreaViewStyle?: StyleProp<ViewStyle>,
}

const Container = ({ children, scrollEnabled = true, showScrollBar, paddingBottom, safeAreaViewStyle }: props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.WHITE, ...safeAreaViewStyle }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
                <ScrollView contentContainerStyle={{ flex: scrollEnabled ? null : 1, paddingBottom: responsiveHeight(paddingBottom) }} showsVerticalScrollIndicator={showScrollBar} scrollEnabled={scrollEnabled} style={styles.container}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
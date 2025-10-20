import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image } from 'react-native';
import { AppColors, responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import { AppImages } from '../assets/images';

const LiveChatScreen = () => {
    const messages = [
        {
            id: '1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem amet.',
            time: '4 mins ago',
            type: 'sent',
        },
        {
            id: '2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt.',
            time: '4 mins ago',
            type: 'received',
        },
    ];

    const renderMessage = ({ item, index }: any) => (
        <View
            style={[
                styles.messageContainer,
                item.type === 'sent' ? styles.sentContainer : styles.receivedContainer,
            ]}
        >
            {index == 0 ? <Image source={AppImages.cart_two} style={{ borderRadius: 100, width: responsiveWidth(10), height: responsiveWidth(10) }} /> : <View style={{ borderRadius: 100, width: responsiveWidth(10), height: responsiveWidth(10) }} />}
            <View
                style={[
                    styles.bubble,
                    item.type === 'sent' ? styles.sentBubble : styles.receivedBubble,
                ]}
            >
                <Text
                    style={[
                        styles.messageText,
                        item.type === 'sent' ? styles.sentText : styles.receivedText,
                    ]}
                >
                    {item.text}
                </Text>
                <Text
                    style={[
                        styles.timeText,
                        item.type === 'sent' ? styles.sentTime : styles.receivedTime,
                    ]}
                >
                    {item.time}
                </Text>
            </View>
        </View>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={item => item.id}
                renderItem={renderMessage}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        // paddingVertical: 10,
    },
    messageContainer: {
        marginVertical: responsiveHeight(1),
        flexDirection: 'row',
        gap: responsiveWidth(4),
    },
    sentContainer: {
        // alignItems: 'flex-start',
    },
    receivedContainer: {
        // alignItems: 'flex-end',
    },
    bubble: {
        maxWidth: responsiveWidth(75),
        borderRadius: 8,
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(3),
    },
    sentBubble: {
        backgroundColor: AppColors.darkGreen,
        // borderTopLeftRadius: 0,
    },
    receivedBubble: {
        backgroundColor: '#236CD9',
        // borderTopRightRadius: 0,
    },
    messageText: {
        fontSize: responsiveFontSize(1.7),
        lineHeight: 20,
    },
    sentText: {
        color: AppColors.WHITE,
    },
    receivedText: {
        color: AppColors.WHITE,
        // color: '#333333',
    },
    timeText: {
        fontSize: responsiveFontSize(1.4),
        marginTop: responsiveHeight(0.5),
    },
    sentTime: {
        color: AppColors.WHITE,
        marginLeft: responsiveWidth(1),
    },
    receivedTime: {
        // color: '#7C9A9A',
        color: AppColors.WHITE,
        marginRight: responsiveWidth(1),
    },
});

export default LiveChatScreen;

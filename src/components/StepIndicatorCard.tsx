/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppColors, responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';

const labels = ['Total Items', 'Delivery Address', 'Payment Method'];

const customStyles = {
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#6CC51D',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#6CC51D',
  stepStrokeUnFinishedColor: '#6CC51D',
  separatorFinishedColor: '#6CC51D',
  separatorUnFinishedColor: '#6CC51D',
  stepIndicatorFinishedColor: '#6CC51D',
  stepIndicatorUnFinishedColor: '#fff',
  stepIndicatorCurrentColor: '#6CC51D',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  labelAlign: 'flex-start',
};

const StepIndicatorCard = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const renderStepIndicator = ({ position, stepStatus }) => {
    const icons = ['layers-outline', 'home-outline', 'credit-card-outline'];
    const isActive = stepStatus === 'current' || stepStatus === 'finished';

    return (
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: isActive ? '#6CC51D' : '#fff',
            borderColor: '#6CC51D',
          },
        ]}
      >
        <Icon
          name={icons[position]}
          size={responsiveFontSize(3)}
          color={isActive ? '#fff' : '#000'}
        />
      </View>
    );
  };

  const renderLabel = ({ label, position }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.labelRow,
        position === labels.length - 1 && { borderBottomWidth: 0 },
      ]}
      onPress={() => setCurrentPosition(position)}
    >
      <View style={{ width: responsiveWidth(75), borderBottomWidth: 1, borderBottomColor: AppColors.LIGHTGRAY, paddingVertical: responsiveHeight(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.labelText}>{label}</Text>
        <Icon name="chevron-right" size={responsiveFontSize(3)} color="#000" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        renderStepIndicator={renderStepIndicator}
        renderLabel={renderLabel}
        stepCount={labels.length} // ensures only 3 circles
        direction="vertical"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
    paddingVertical: responsiveHeight(0.5),
    flex: 1,
  },
  labelText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#000',
  },
});

export default StepIndicatorCard;

import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import LineBreak from './LineBreak';

type Props = {
  visible: boolean;
  onClose: () => void;
  onRemove: () => void;
  itemName: string;
  itemQty: number;
};

const RemoveItemModal = ({ visible, onClose, onRemove, itemName, itemQty }: Props) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.message}>
            Are you sure you want to remove{' '}
            <Text style={styles.itemText}>
              {itemName} ({itemQty}pcs)
            </Text>{' '}
            from your shopping cart?
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.backBtn} onPress={onClose}>
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.removeBtn} onPress={onRemove}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  modalContainer: {
    width: responsiveWidth(100),
    backgroundColor: '#fff',
    borderRadius: 8,
    height: responsiveHeight(20),
    padding: responsiveWidth(4),
    elevation: 5,
  },
  message: {
    fontSize: responsiveFontSize(2),
    color: '#000',
    textAlign: 'left',
    marginBottom: responsiveHeight(4),
  },
  itemText: {
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  backBtn: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  removeBtn: {
    backgroundColor: '#E74C3C',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  backText: {
    color: '#000',
    fontWeight: '500',
  },
  removeText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default RemoveItemModal;

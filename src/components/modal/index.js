import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const {width} = Dimensions.get('window');

const CustomModal = ({
  visible,
  children,
  transparent,
  style,
  animationType,
  backgroundColor,
  onBackdropPress,
  animationInTiming,
}) => {
  return (
    <Modal
      onBackdropPress={onBackdropPress}
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={1000}
      isVisible={visible}>
      <View style={[styles.modalcontainer(backgroundColor), {...style}]}>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalcontainer: backgroundColor => ({
    paddingVertical: 30,
    backgroundColor: backgroundColor ? backgroundColor : 'white',
    borderRadius: 20,
  }),
  iconleft: {
    fontSize: 20,
  },
  title: {
    color: '#1B1D21',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: width * 0.26,
  },
});

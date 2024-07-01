import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
// import styles from './styles';

const ToastFailed = ({message, onTouchEnd}) => {
  return (
    <View onTouchEnd={onTouchEnd}>
      <Modal
        transparent={true}
        visible={message === undefined ? false : true}
        style={styles.containerModal}>
        <View style={styles.modal}>
          <Text style={styles.TextModal}>{message}</Text>
        </View>
      </Modal>
    </View>
  );
};

export default ToastFailed;

const styles = StyleSheet.create({
  containerModal: {height: 40},
  modal: {
    width: '100%',
    backgroundColor: '#eb4034',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  TextModal: {color: 'white', width: 300, textAlign: 'center'},
});

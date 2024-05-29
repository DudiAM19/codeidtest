import React from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../icon';
import CustomModal from '../modal';

const ModalDelete = ({
  title,
  search,
  onChangeText,
  visibleModalDelete,
  onDelete,
  onCancel,
  name,
}) => {
  return (
    <CustomModal onBackdropPress={onCancel} visible={visibleModalDelete}>
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{fontFamily: 'Poppins-Medium', fontSize: 15, color: 'black'}}>
          Are you sure to delete {name} ?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginTop: Dimensions.get('window').width * 0.04,
          }}>
          <TouchableOpacity
            onPress={onDelete}
            style={{
              backgroundColor: 'red',
              width: Dimensions.get('window').width * 0.2,
              height: Dimensions.get('window').width * 0.08,
              marginHorizontal: Dimensions.get('window').width * 0.01,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{fontFamily: 'Poppins-Bold', color: 'white'}}>
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCancel}
            style={{
              backgroundColor: '#047804',
              width: Dimensions.get('window').width * 0.2,
              height: Dimensions.get('window').width * 0.08,
              marginHorizontal: Dimensions.get('window').width * 0.01,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{fontFamily: 'Poppins-Bold', color: 'white'}}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
};

export default ModalDelete;

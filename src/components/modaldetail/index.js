import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../icon';
import CustomModal from '../modal';

const ModalDetail = ({
  title,
  search,
  onChangeText,
  visibleModalDetail,
  onDelete,
  onCancel,
  firstName,
  lastName,
  age,
  image,
  loading,
  data,
}) => {
  return (
    <CustomModal onBackdropPress={onCancel} visible={visibleModalDetail}>
      <View style={{paddingHorizontal: 20}}>
        <View>
          <Image
            source={{uri: data?.data?.photo}}
            style={{
              width: Dimensions.get('window').width * 0.3,
              height: Dimensions.get('window').width * 0.3,
              borderRadius: 100,
              marginBottom: 30,
              alignSelf: 'center',
            }}
          />
        </View>
        {loading === true ? (
          <ActivityIndicator
            size="small"
            color="black"
            style={{marginTop: 30}}
          />
        ) : (
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                color: 'black',
              }}>
              First Name : {data?.data?.firstName}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                color: 'black',
              }}>
              Last Name : {data?.data?.lastName}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                color: 'black',
              }}>
              Age : {data?.data?.age}
            </Text>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginTop: Dimensions.get('window').width * 0.04,
          }}>
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
            <Text style={{fontFamily: 'Poppins-Bold', color: 'white'}}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
};

export default ModalDetail;

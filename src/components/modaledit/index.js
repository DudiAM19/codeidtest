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

const ModalEdit = ({
  title,
  search,
  onChangeText,
  visibleModalEdit,
  onEdit,
  onCancel,
  firstName,
  lastName,
  age,
  image,
  loading,
  data,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onPressEditImage,
  valueFirstName,
  valueLastName,
  valueAge,
}) => {
  return (
    <CustomModal onBackdropPress={onCancel} visible={visibleModalEdit}>
      <View style={{paddingHorizontal: 20}}>
        <View
          onTouchEnd={onPressEditImage}
          style={{
            width: Dimensions.get('window').width * 0.3,
            height: Dimensions.get('window').width * 0.3,
            marginBottom: 30,
            borderWidth: 1,
            borderRadius: 100,
            alignSelf: 'center',
          }}>
          <Image
            source={{uri: data?.photo}}
            style={{
              width: Dimensions.get('window').width * 0.3,
              height: Dimensions.get('window').width * 0.3,
              borderRadius: 100,
              marginBottom: 30,
            }}
          />
          <TouchableOpacity
            onPress={onPressEditImage}
            style={{
              right: 20,
              bottom: 10,
              position: 'absolute',
            }}>
            <Icon
              style={{fontSize: 17, color: '#047804'}}
              type="Feather"
              name="edit"
            />
          </TouchableOpacity>
        </View>
        {loading === true ? (
          <ActivityIndicator
            size="small"
            color="black"
            style={{marginTop: 30}}
          />
        ) : (
          <View>
            <View>
              <TextInput
                placeholderTextColor={'black'}
                placeholder={data?.firstName}
                onChangeText={onChangeFirstName}
                value={valueFirstName}
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 15,
                  color: 'black',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  marginVertical: Dimensions.get('window').width * 0.01,
                }}
              />
            </View>
            <View>
              <TextInput
                placeholderTextColor={'black'}
                placeholder={data?.lastName}
                onChangeText={onChangeLastName}
                value={valueLastName}
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 15,
                  color: 'black',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  marginVertical: Dimensions.get('window').width * 0.01,
                }}
              />
            </View>
            <View>
              <TextInput
                placeholderTextColor={'black'}
                placeholder={data?.age?.toString()}
                onChangeText={onChangeAge}
                value={valueAge}
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 15,
                  color: 'black',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  marginVertical: Dimensions.get('window').width * 0.01,
                }}
              />
            </View>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginTop: Dimensions.get('window').width * 0.04,
          }}>
          <TouchableOpacity
            onPress={onEdit}
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
              Save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCancel}
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
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
};

export default ModalEdit;

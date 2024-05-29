import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../icon';

const Card = ({
  title,
  search,
  img,
  name,
  age,
  onPressDelete,
  onPressEdit,
  onPress,
}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
      {img.slice(0, 2) !== 'ht' ? (
        <View
          style={{
            width: Dimensions.get('window').width * 0.14,
            height: Dimensions.get('window').width * 0.14,
            borderRadius: 50,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#adacac',
          }}>
          <Icon
            style={{fontSize: 20}}
            type="MaterialCommunityIcons"
            name="image-off"
          />
        </View>
      ) : (
        <Image
          source={{uri: img}}
          style={{
            width: Dimensions.get('window').width * 0.14,
            height: Dimensions.get('window').width * 0.14,
            borderRadius: 50,
          }}
        />
      )}
      <View
        onTouchEnd={onPress}
        style={{flex: 1, marginLeft: Dimensions.get('window').width * 0.04}}>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#242424'}}>
          {name}
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular', color: '#adacac'}}>
          {age}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={onPressDelete}
          style={{marginHorizontal: Dimensions.get('window').width * 0.01}}>
          <Icon
            style={{fontSize: 17, color: '#ff3b3b'}}
            type="Feather"
            name="trash-2"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressEdit}
          style={{marginHorizontal: Dimensions.get('window').width * 0.01}}>
          <Icon
            style={{fontSize: 17, color: '#047804'}}
            type="Feather"
            name="edit"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

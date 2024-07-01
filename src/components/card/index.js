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

const Card = ({title, search, img, name, rating, onPressLike, onPress}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/original${img}`}}
        style={{
          width: Dimensions.get('window').width * 0.14,
          height: Dimensions.get('window').width * 0.16,
          borderRadius: 10,
        }}
      />

      <View
        onTouchEnd={onPress}
        style={{flex: 1, marginLeft: Dimensions.get('window').width * 0.04}}>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#242424'}}>
          {name}
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular', color: '#adacac'}}>
          ratings: {rating}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={onPressLike}
          style={{marginHorizontal: Dimensions.get('window').width * 0.01}}>
          <Icon
            style={{fontSize: 17, color: '#ff3b3b'}}
            type="MaterialIcons"
            name="favorite-outline"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

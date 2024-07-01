import React from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../icon';
import {setDetailMovie} from '../../redux/action/movie-action';

const Header = ({title, search, onChangeText, navigation, dispatch}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 50,
        flexDirection: search ? 'row' : 'row',
        justifyContent: search ? 'space-between' : 'flex-start',
        alignItems: 'center',
      }}>
      {!search && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack(), dispatch(setDetailMovie(undefined));
          }}>
          <Icon
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: -4,
              marginRight: Dimensions.get('window').width * 0.03,
            }}
            type="Ionicons"
            name="chevron-back"
          />
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          color: '#242424',
          fontSize: 15,
        }}>
        {title}
      </Text>
      {search && (
        <View
          style={{
            height: Dimensions.get('window').width * 0.07,
            width: Dimensions.get('window').width * 0.3,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#bababa',
          }}>
          <Icon
            style={{fontSize: 13, color: '#212121'}}
            name="search"
            type="Octicons"
          />
          <TextInput
            placeholder="search"
            onChangeText={onChangeText}
            style={{
              // height: Dimensions.get('window').width * 0.06,
              fontFamily: 'Poppins-Medium',
              flex: 1,
              paddingTop: 4,
              paddingBottom: 1,
              color: 'black',
              marginTop: -5,
              paddingLeft: 5
              // marginBottom: -Dimensions.get('window').width * 0.01,
              // justifyContent: 'center',
              // alignItems: 'center',
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Header;

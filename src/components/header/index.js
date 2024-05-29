import React from 'react';
import {Dimensions, Text, TextInput, View} from 'react-native';
import Icon from '../icon';

const Header = ({title, search, onChangeText}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 50,
        flexDirection: search ? 'row' : 'column',
        justifyContent: search ? 'space-between' : 'flex-start',
        alignItems: 'center',
      }}>
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

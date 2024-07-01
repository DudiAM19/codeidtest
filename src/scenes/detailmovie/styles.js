import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  containerdashboard: {
    alignItems: 'center',
    paddingTop: 10,
  },
  img: {
    width: width * 0.5,
    height: width * 0.7,
    alignSelf: 'center',
  },
  genresection: {flexDirection: 'row', marginTop: 15},
  textgenre: {
    marginHorizontal: 3,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  sinopsi: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    width: width * 0.9,
    textAlign: 'left',
  },
});

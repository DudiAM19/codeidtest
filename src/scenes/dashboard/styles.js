import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  containerdashboard: {
    marginTop: width * 0.1,
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  btnadd: {
    backgroundColor: '#889ec2',
    width: width * 0.3,
    height: width * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    marginBottom: width * 0.05,
    elevation: 4,
  },
  textbtn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'white',
  },
  textnotfound: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginTop: width * 0.07,
  },
  margintop: {
    marginTop: width * 0.1,
  },
});

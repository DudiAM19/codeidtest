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
  tabsection: {
    flexDirection: 'row',
    alignSelf: 'center',
    // marginTop: width * 0.05,

    width: '100%',
    justifyContent: 'center',
    marginBottom: width * 0.03,
    paddingBottom: 10,
  },
  tabbtn: (id, index) => ({
    // marginHorizontal: width * 0.01,
    borderBottomWidth: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: id === index ? '#4287f5' : 'black',
    paddingBottom: 5,
  }),
  texttab: (id, index) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: id === index ? '#4287f5' : 'black',
  }),
  pagesectino: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.01,
  },
  icon: {
    fontSize: 30,
    marginBottom: -width * 0.02,
    color: '#4287f5',
  },
  pagesection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conteinermodal: {
    paddingHorizontal: 20,
    // paddingRight: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textmodal: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  iconmodal: {
    fontSize: 20,
    color: '#047804',
    marginTop: -5,
    marginLeft: width * 0.03
  },
});

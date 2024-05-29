import React from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const defaultStyle = {
  flex: 1,
};
const Container = ({children, backgroundColor, barStyle, barColor}) => (
  <View
    style={[
      {
        ...defaultStyle,
        ...{backgroundColor: backgroundColor ? backgroundColor : '#FFF'},
      },
    ]}>
    <StatusBar translucent barStyle={barStyle} backgroundColor={barColor} />
    <View style={{flex: 1}}>{children}</View>
  </View>
);

Container.defaultProps = {
  barStyle: 'light-content',
  barColor: 'transparent',
};

export default Container;

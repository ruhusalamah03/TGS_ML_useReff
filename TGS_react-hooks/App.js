import * as React from 'react';
import {View} from 'react-native';
import HelloWorld from './components/Hello';

export default function App(){

  return(
    <View>
      <HelloWorld nama="diana"/>
      <HelloWorld nama="shinta"/>

    </View>
  );
  
}
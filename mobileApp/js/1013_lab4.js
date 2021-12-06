import React from 'react';
import { View, Text } from 'react-native';

var N = ['Ewha', 'June', 'Jane', 'Nick'];
var P = [1234, 3347, 1111, 1212];
  

export default function App() {
  var L = [];



  for (var i = 0; i < N.length; i++){
    var a = <Text style={{ fontSize: 20 }}>{N[i]} : {P[i]}</Text>
    L.push(a);
  }
 
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontSize: 40 }}>PhoneBook</Text>
      {L}
    </View>
  );
}

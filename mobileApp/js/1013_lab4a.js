import React from 'react';
import { View, Text } from 'react-native';

var text_st = { fontSize: 20, borderWidth: 1, borderColor: 'gray', flex: 1, padding: 5, margin: 2 };
var N = ['Ewha', 'June', 'Jane', 'Nick'];
var P = [1234, 3347, 1111, 1212];
  

export default function App() {
  var L = [];

  for (var i = 0; i < N.length; i++){
    
    var a = <View style={{fontSize:20,flexDirection:'row'}}><Text style={ text_st}>{N[i]}</Text><Text style={ text_st}>{P[i]}</Text></View>
      L.push(a);
    
  }

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontSize: 40 }}>PhoneBook</Text>
      {L}
    </View>
  );
}

import React from 'react';
import { View, Text,Image } from 'react-native';

var L=[<Text>Hello</Text> ,<Text>Ewha</Text>];

for (var i = 0; i < 10; i++)
  L.push(<Text>count {i}</Text>);


for (var i = 0; i < 3; i++)
  L.push(<Image style={{width:100,height:100}} source={require('./cat-icon.png')}/>)

export default function App() {
 
  return (
    <View style={{ marginTop: 30 }}>{L}</View>
  );
}

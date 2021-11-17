import React,{useState, useEffect} from 'react';
import { View, Text,Button } from 'react-native';

var text_st = { width: 100,fontSize: 30, padding: 10, margin: 20,backgroundColor:'lightgray' };

export default function App() {
  const [val, setval] = useState(0);

  useEffect(function () {
    console.log("this is side effect", val);
  });

  return (
    <View style={{ paddingTop: 30, alignItems: 'center' }}>
      <Text style={text_st}>{val}</Text>
      <Button title="Count Up" onPress={function () { setval(val + 1) }} />
      <View style={{ height: 10 }} />
      <Button title="Count Down" onPress={function(){setval(val-1)}}/>
    </View>
  );
}
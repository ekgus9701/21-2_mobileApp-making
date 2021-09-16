import React,{useState} from 'react';
import { Text, View, Button} from 'react-native';

var text_st = { fontSize: 30, backgroundColor: 'lightgray', padding: 10, margin: 10 };
var hello = 'Nice to meet you';

export default function App() {
  const [greet, setGreet] = useState('Hi');


  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_st}>{greet}</Text>
      <Text style={text_st}>{greet}</Text>
      <View style={{margin:10, flexDirection:"row"}}>
      <Button title="Press Me" onPress={function () { setGreet('Hello,Ewha') }} />
      <View style={{ height: 10 }}></View>
      <Button title="Touch Me" onPress={function () {setGreet('Nice to meet you')}}/>
      </View>
      </View>
  )
}

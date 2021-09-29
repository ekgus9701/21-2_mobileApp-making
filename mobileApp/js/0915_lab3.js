import React,{useState} from 'react';
import { Text, View, Button,TextInput} from 'react-native';

var text_st = { fontSize: 30, backgroundColor: 'lightgray', padding: 10, margin: 10 };
var input_st = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };


export default function App() {
  const [name, setName] = useState('');


  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_st}>Hello, {name}</Text>
          <TextInput style={input_st} onChangeText={function (t) { setName(t) }} />
    </View>
  );
}

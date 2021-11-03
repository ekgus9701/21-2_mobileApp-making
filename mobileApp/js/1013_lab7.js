import React,{useState} from 'react';
import { View, Text,TextInput,Button } from 'react-native';

var input_st = { fontSize: 20, borderWidth: 1, borderColor: 'gray', flex: 1, padding: 5, margin: 2 };
var N = ['Ewha', 'June', 'Jane', 'Nick'];
var P = [1234, 3347, 1111, 1212];
  

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [refresh, setRefresh] = useState(0);

  function add_item() {
    N.push(name);
    P.push(phone);
    setRefresh(refresh + 1);
  }

  function pop_item() {
    N.pop(name);
    P.pop(phone);
    setRefresh(refresh + 1);
  }

  var L = [];

  for (var i = 0; i < N.length; i++){
    
    var a = <View style={{fontSize:20,flexDirection:'row'}}><Text style={ input_st}>{N[i]}</Text><Text style={ input_st}>{P[i]}</Text></View>
      L.push(a);
    
  }

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontSize: 40 }}>PhoneBook</Text>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <TextInput style={input_st} onChangeText={setName} />
        <TextInput style={input_st} onChangeText={setPhone} />
        <Button title=" Add "onPress={add_item}/>
        <Button title=" DEL "onPress={pop_item}/>
      </View>
      {L}
    </View>
  );
}

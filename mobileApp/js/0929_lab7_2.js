import React,{useState} from 'react';
import { Text, View, Button,TextInput} from 'react-native';

var text_st = { fontSize: 30, backgroundColor: 'lightgray', padding: 10, margin: 10 };

export default function App() {
 
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  
  
  return (
    <View style={{ paddingTop: 30 }}>
     
        <Text style={text_st}> {A} x {B} = {A*B}</Text>
      
      <View style={{ margin: 20 }}>
        <View style={{ flexDirection: "row" }}>
        <Button title="+    "
            onPress={function () { setA(A + 1) }}
        />
        
          <Button title="  +  "
            onPress={function () { setB(B + 1) }} />
          </View>
        <View style={{ flexDirection: "row" }}>
        <Button title="-    "
          onPress={function () { setA(A - 1) }} />
          <Button title="   -  "
            onPress={function () { setB(B - 1) }} />
          </View>
      </View>
    </View>
  );
}

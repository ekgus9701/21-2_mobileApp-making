import React,{useState} from 'react';
import { Text, View, Button, TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var input_st = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };
var text_st = { fontSize: 20, margin: 10 };
var text1_st = { fontSize: 30, padding: 10, margin: 10 , backgroundColor: 'lightgray'};

function HelloScreen() {
  const [greet, setGreet] = useState('Hi');
  const [name, setName] = useState('Name');
  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_st}> {greet}, {name}</Text>
      <TextInput style={input_st}onChangeText={setName}/>
     

      <View style={{ margin: 10, flexDirection: "row-reverse" }}>
        <Button title="Nice"
          onPress={function () { setGreet('Nice to meet you') }} />
        <View style={{ width: 10 }}></View>
        <Button title="Hello"
        onPress={function(){setGreet('Hello')}}/>
      </View>
    </View>
  );
}

function AboutScreen() {
  return (
    <View>
    <Text style={text_st}>This is about the app</Text>
    <Image style={{width:200,height:200}}
        source={require('./cat-icon.png')}/>
    </View>
  );

}

function MultiplierScreen() {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    return (
      <View style={{ paddingTop: 30 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={text1_st}> {A}</Text>
          <Text style={{ fontSize: 30 , padding: 10, margin: 10}}>x</Text>
          <Text style={text1_st}> {B}</Text>
          <Text style={{ fontSize: 30, padding: 10, margin: 10 }}>=</Text>
          <Text style={text1_st}> {A*B}</Text>
          
        </View>
        
        <View style={{ margin: 20 }}>
          <View style={{ flexDirection: "row" }}>
          <Button title="+    "
              onPress={function () { setA(A + 1)  }}
          />
          
            <Button title="  +  "
              onPress={function () { setB(B + 1) }} />
            </View>
          <View style={{ flexDirection: "row" }}>
          <Button title="-    "
            onPress={function () { setA(A - 1) }} />
            <Button title="   -  "
              onPress={function () { setB(B - 1)}} />
            </View>
        </View>
      </View>
    );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={text_st}>Home Screen</Text>
      <Button title="About"
        onPress={function () { navigation.navigate('About') }} />
      <View style={{ height: 10 }} />
      <Button title="Hello"
        onPress={function () { navigation.navigate('Hello') }} />
       <View style={{ height: 10 }} />
      <Button title="구구단"
        onPress={function () { navigation.navigate('구구단') }} />
    </View>
  )
}
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
        <Stack.Screen name="구구단" component={MultiplierScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

import React,{useState} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var input_st = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };
var hello = 'Nice to meet you';
var text_st = { fontSize: 20, margin: 10 };

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
  return <Text style={text_st}>This is about the app</Text>;
};

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={text_st}>Home Screen</Text>
      <Button title="About"
        onPress={function () { navigation.navigate('About') }} />
      <View style={{ height: 10 }} />
      <Button title="Hello"
        onPress={function () { navigation.navigate('Hello') }} />
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
      </Stack.Navigator>
   </NavigationContainer>
  );
}

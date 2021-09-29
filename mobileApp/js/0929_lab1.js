import React,{useState} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


var text_st = { fontSize: 20, margin: 10 };

function HelloScreen() {
  return (
    <View>
      <Text style={text_st}>Hello,Navigation</Text>
      <Button title="Hello" />
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

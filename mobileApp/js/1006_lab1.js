import React from 'react';
import { Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';

async function play00() {
  console.log('Loading Sound');
  var s = await Audio.Sound.createAsync(require('./assets/note00.m4a'));
  console.log('Playing Sound');
  s.sound.playAsync();
}

async function play02() {
  var s = await Audio.Sound.createAsync(require('./assets/note02.m4a'));
  s.sound.playAsync();
}

async function play04() {
  var s = await Audio.Sound.createAsync(require('./assets/note04.m4a'));
  s.sound.playAsync();
}

async function play05() {
  var s = await Audio.Sound.createAsync(require('./assets/note05.m4a'));
  s.sound.playAsync();
}
function test() {
  console.log("tttttttt");
}

export default function App() {
  console.log("aad");
  return (
    <View style={{ paddingTop: 50 }}>
      <Button title="Play Sound" onPress={play00} />
      <Button title="Play Sound" onPress={play02} />
      <Button title="Play Sound" onPress={play04} />
      <Button title="Play Sound" onPress={play05} />
      <Button title="test" onPress={function () { console.log("uuuu") }}/>
      
    </View>
  );
}

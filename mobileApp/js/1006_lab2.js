import React from 'react';
import {  View, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';

key_st = { flex: 1, margin: 5, backgroundColor: 'rgba(100,100,100,0.2)' };
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
async function play07() {
  var s = await Audio.Sound.createAsync(require('./assets/note07.m4a'));
  s.sound.playAsync();
}
async function play09() {
  var s = await Audio.Sound.createAsync(require('./assets/note09.m4a'));
  s.sound.playAsync();
}
async function play11() {
  var s = await Audio.Sound.createAsync(require('./assets/note11.m4a'));
  s.sound.playAsync();
}
async function play12() {
  var s = await Audio.Sound.createAsync(require('./assets/note12.m4a'));
  s.sound.playAsync();
}
export default function App() {
 
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <ImageBackground style={{ height: '100%', width: '100%' }}
      resizeMode="stretch" source={require('./assets/keyboard.png')}>
      <View style={key_st} onTouchStart={play00}></View>
      <View style={key_st}onTouchStart={play02}></View>
      <View style={key_st}onTouchStart={play04}></View>
      <View style={key_st}onTouchStart={play05}></View>
      <View style={key_st}onTouchStart={play07}></View>
      <View style={key_st}onTouchStart={play09}></View>
      <View style={key_st}onTouchStart={play11}></View>
      <View style={key_st}onTouchStart={play12}></View>
      </ImageBackground>
    </View>
  );
}

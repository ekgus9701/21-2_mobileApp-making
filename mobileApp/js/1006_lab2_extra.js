import React, {useState} from 'react';
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
  const [k1, setk1] = useState(0);
  const [k2, setk2] = useState(0);
  const [k4, setk4] = useState(0);
  const [k5, setk5] = useState(0);
  const [k7, setk7] = useState(0);
  const [k9, setk9] = useState(0);
  const [k11, setk11] = useState(0);
  const [k12, setk12] = useState(0);
 
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <ImageBackground style={{ height: '100%', width: '100%' }}
      resizeMode="stretch" source={require('./assets/keyboard.png')}>
        <View style={key_st} opacity={k1}
          onTouchStart={function () { play00(); setk1(1) }}
          onTouchEnd={function () { setk1(0) }}/>
      <View style={key_st}opacity={k2}
          onTouchStart={function () { play02(); setk2(1) }}
          onTouchEnd={function () { setk2(0) }}/>
      <View style={key_st}opacity={k4}
          onTouchStart={function () { play04(); setk4(1) }}
          onTouchEnd={function () { setk4(0) }}/>
      <View style={key_st}opacity={k5}
          onTouchStart={function () { play05(); setk5(1) }}
          onTouchEnd={function () { setk5(0) }}/>
      <View style={key_st}opacity={k7}
          onTouchStart={function () { play07(); setk7(1) }}
          onTouchEnd={function () { setk7(0) }}/>
      <View style={key_st}opacity={k9}
          onTouchStart={function () { play09(); setk9(1) }}
          onTouchEnd={function () { setk9(0) }}/>
      <View style={key_st}opacity={k11}
          onTouchStart={function () { play11(); setk11(1) }}
          onTouchEnd={function () { setk11(0) }}/>
      <View style={key_st}opacity={k12}
          onTouchStart={function () { play12(); setk12(1) }}
          onTouchEnd={function () { setk12(0) }}/>
      </ImageBackground>
    </View>
  );
}

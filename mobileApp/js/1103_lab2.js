import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function Circle() {
  return <View style={styles.circle} />;
}

function Blank() {
  return <View style={[styles.circle, { backgroundColor: undefined, borderWidth: 0 }]} />;
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgb(0,200,255)',
    borderWidth: 1,
    margin: 2,
  },
  dice: {
    backgroundColor: 'rgb(255,240,200)',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    margin:5,
  }
});

function Dice5() {

  return (
    <View style={styles.dice}>
      <View style={{ flexDirection: 'row' }}><Circle /><Blank /><Circle /></View>
      <View style={{ flexDirection: 'row' }}><Blank /><Circle /><Blank /></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
    </View>
  );
}

export default function App() {
  const [N, setN] = useState(0);

  return (
    <View style={{ flex:1,marginTop:40,alignItems:'center' }}>
      <Text>Touched {N} times</Text>
      <TouchableOpacity onPress={function () { setN(N + 1); }}>
        <Dice5/>
      </TouchableOpacity>
    </View>
  );
}

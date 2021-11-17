import React,{useState, useEffect} from 'react';
import { View, Text,Button } from 'react-native';

var text_st = { fontSize: 60, padding: 10,backgroundColor:'rgb(255,240,200)'};

export default function App() {
  const [hh, sethh] = useState("");
  const [mm, setmm] = useState("");
  const [ss, setss] = useState("");
  const [ap, setap] = useState("");

  useEffect(function () {
    setInterval(run_everysec, 1000);
  }, []);
  
  function run_everysec() {
    var d = new Date();
    sethh(d.getHours());
    setmm(d.getMinutes());
    setss(d.getSeconds());
    if (d.getHours() < 12)
      setap(" am");
    else {
      setap(" pm");
    }
  }

  return (
    <View style={{ paddingTop: 30}}>
      <Text style={text_st}>{hh}:{mm}:{ss}{ ap}</Text>
    </View>
  );
}
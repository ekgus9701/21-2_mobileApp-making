import React,{useState, useEffect} from 'react';
import { View, Text,Button } from 'react-native';

var text_st = {
  fontSize: 60, fontWeight: "bold",padding:10,backgroundColor: 'rgb(255,240,200)'
};
var text_st1 = {
  fontSize: 60,  padding:10, backgroundColor: 'rgb(255,240,200)'
};
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
    if (d.getHours() < 10)
      
      sethh("0"+  d.getHours());
    else {
      sethh( d.getHours());
    }
    if(d.getMinutes() < 10)
      setmm("0"+  d.getMinutes());
    else {
      setmm( d.getMinutes());
    }
    if(d.getSeconds() < 10)
      setss("0"+  d.getSeconds());
    else {
       setss(d.getSeconds());
    }
    if (d.getHours() < 12)
      setap(" am");
    else {
      setap(" pm");
    }
  }

  return (
    <View style={{ paddingTop: 30,flexDirection:'row' }}>
      
      <Text style={text_st}>{hh}:{mm}</Text>
      
        <Text style={text_st1}>:{ss}{ap}                       </Text>
      </View>
    
  );
}
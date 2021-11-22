import React,{useState, useEffect} from 'react';
import { View, Text } from 'react-native';

var url="http://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&cnt=5&appid=6af8dad4784c634d3674f60110f2a015"
var st_text = { fontSize: 20 };

export default function App() {
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');
 
  const [date, setDate] = useState('');

  useEffect(function () {
    fetch(url)
      .then(function (response) { return response.json(); })
      .then(function (json) { console.log(json); setDate(json.dt_txt); setTemp(json.list[0].main.temp); setWeather(json.weather[0].description); })
    .catch(function (error) { console.error(error); })
  }, []);

  return (
    <View style={{ flex:1,marginTop:30,padding:20}}>
      <Text style={st_text}>Date: {date }</Text>
      
      <Text style={st_text}>Temp: {temp }</Text>
      <Text style={st_text}>Weather: {weather }</Text>
       
     
    </View>
  );
}
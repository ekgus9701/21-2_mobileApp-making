import React, {useState} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
  

export default function App() {
  const [date,setDate]=useState('')
  const [date1,setDate1]=useState('')
  const styles=StyleSheet.create({
    container:{
      flex:1,marginTop:40,
    },
    box:{
      margin:20,
    },
    text:{
      fontSize:20,
      marginVertical:10,
    }
  });

  function onDateChange(d){
    console.log(d);
    setDate(d.format('YYYYMMDD'));
    setDate1(d.format('MMMM DD, YYYY'))
  }
  return (
    <View style={ styles.container }>
      <CalendarPicker onDateChange={onDateChange}/>
      <View style={styles.box}>
        <Text>Date: {date}</Text>
        <Text style={styles.text}>{date1}</Text>
      </View>
      
    </View>
  );
}

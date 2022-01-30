import React, {useState} from 'react';
import { View, Text,StyleSheet,Button,TextInput } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
  
const Stack=createStackNavigator();

const styles=StyleSheet.create({
  container:{
    flex:1,marginTop:40,
  },
  box:{
    marginTop:10,
    marginHorizontal:20,
  },
  datetext:{
    fontSize:20,
    marginVertical:10,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
  },
  text:{
    fontSize:16,
  },
  expense:{
    flex:1,borderBottmWidth:1,
    marginHorizontal:10,
    fontSize:16,
    color:'blue',
  },
  memo: {
    borderBottomWidth:1,
    fontSize:16,
    marginTop:10,
    color:'blue',
  },
});

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Memo" component={MemoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MemoScreen({route, navigation}){
  var d=route.params.date;
  const [date,setDate]=useState(d.format('YYYYMMDD'));
  const [date1,setDate1]=useState(d.format('MMMM DD, YYYY'));
  const [expense,setExpense]=useState(route.params.expense);
  const[memo,setMemo]=useState(route.params.memo);

  async function save_memo(){
    await AsyncStorage.setItem(date,expense)
    await AsyncStorage.setItem(date+'m',memo)
  }

  return(
  <View style={ styles.container }>
    <Text style={styles.datetext}>{date1}</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Expense</Text>

            <TextInput style={styles.expense} keyboardType="numeric"
              onChangeText={setExpense} value={expense}/>
            <Button title="Save" onPress={save_memo}/>
          </View>
        <TextInput style={styles.memo} placeholder="Memo" onChangeText={setMemo} value={memo}/>
        </View>
  );
}

function HomeScreen({navigation}){
  async function date_change(d){
    console.log(d.format('YYYYMMDD'));
    var date=d.format('YYYYMMDD');

    var val_expense='';
    var val_memo='';

    var value=await AsyncStorage.getItem(date);
    var value_m=await AsyncStorage.getItem(date+'m');

    console.log(value);

    if(value!==null){
      val_expense=value;
      val_memo=value_m;
    }

    navigation.navigate('Memo',
    {date:d,expense:val_expense,memo:val_memo});
  }
  return(
    <View style={styles.container}>
      <CalendarPicker onDateChange={date_change}/>
    </View>
  );
}



  

  

  


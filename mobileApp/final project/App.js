import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Button, TextInput, ScrollView, FlatList, Alert } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';


async function playMusic() {
  var s = await Audio.Sound.createAsync(require('./assets/music.mp3'));
  s.sound.playAsync();
}

const Drawer = createDrawerNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Diary" component={DiaryScreen} />
        <Drawer.Screen name="Interest" component={BookScreen} />
        <Drawer.Screen name="FortuneCookie" component={FortuneScreen} />
        <Drawer.Screen name="BucketList" component={BucketScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  box: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  datetext: {
    fontSize: 20,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },

  memo: {
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#00498c',

  },
  card: {
    backgroundColor: '#fff',
    flex: 1,

  },

});
function HomeScreen({ navigation }) {
  const [Love, setLove] = useState(0);
  const [temp, setTemp] = useState(0);

  if (temp == 0) {
    love_change();
    setTemp(1);
  }

  async function love_change() {

    var lovevalue = await AsyncStorage.getItem('lovecnt');

    if (lovevalue !== null) {
      var t = parseInt(lovevalue);
      setLove(t);
    }
    else {
      setLove(0);
    }
  }

  async function save_love() {
    try {
      var t_s = Love.toString();
      await AsyncStorage.setItem('lovecnt', t_s);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    save_love();
  }, [Love]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Your photos</Text>
      <Button title="Play Music" onPress={playMusic} />
      <Text style={{ fontSize: 20, textAlign: "center" }}>❤ : {Love}</Text>
      <ScrollView style={styles.card}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1); }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/1.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/2.jpg')} />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/3.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/4.jpg')} />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/5.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/6.jpg')} />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/7.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/8.jpg')} />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/9.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/10.jpg')} />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/11.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/12.jpg')} />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/13.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/14.jpg')} />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/15.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 0.5, height: 200 }} onPress={function () { setLove(Love + 1) }}>
            <Image style={{ flex: "50%", width: '100%', borderWidth: 2, borderColor: 'black' }}
              source={require('./images/16.jpg')} />
          </TouchableOpacity>

        </View>




      </ScrollView>
    </SafeAreaView>
  );
}

function DiaryScreen() {
  const [date, setDate] = useState('')
  const [date1, setDate1] = useState('')
  const [feeling, setFeeling] = useState('')
  const [memo, setMemo] = useState('')
  async function date_change(d) {
    console.log(d);
    setDate(d.format('YYYYMMDD'));
    setDate1(d.format('MMMM DD, YYYY'))
    var key = d.format('YYYYMMDD');
    var value = await AsyncStorage.getItem(key);
    var value_m = await AsyncStorage.getItem(key + 'm');
    if (value !== null) {
      setFeeling(value);
      setMemo(value_m);
    }
    else {
      setFeeling('');
      setMemo('');
    }
  }

  async function save_memo() {
    await AsyncStorage.setItem(date, feeling)
    await AsyncStorage.setItem(date + 'm', memo)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Your feelings</Text>

      <CalendarPicker onDateChange={date_change} />
      <View style={styles.box}>
        <Text style={styles.datetext}>{date1}</Text>
        <View style={styles.row}>
          <Text style={styles.text}>How was your day?    </Text>
          <TextInput style={styles.feeling} placeholder="Feeling"
            onChangeText={setFeeling} value={feeling} />
          <Button title="Save" onPress={save_memo} />
        </View>
        <TextInput style={styles.memo} placeholder="Memo" onChangeText={setMemo} value={memo} />
      </View>

    </View>
  );
}



const bucketstyles = StyleSheet.create({
  container: {
    flex: 1

  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#00498c',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20
  },

  input_st: {
    fontSize: 20, borderBottomWidth: 1, flex: 1, padding: 5, margin: 5, marginLeft: 10, borderColor: 'gray',
  }


});

var input_st = { fontSize: 20, borderBottomWidth: 1, borderColor: 'gray', flex: 1, padding: 5, margin: 2 };
var bucket_list = [];

function BucketScreen() {// 완성


  const [dream, setDream] = useState('');
  const [extra, setExtra] = useState(false);
  const [sel, setSel] = useState(null);

  async function load_data(d) {
    var value = await AsyncStorage.getItem("bucketlist");
    bucket_list = JSON.parse(value);
    setExtra(!extra);
  }

  async function save_data() {
    await AsyncStorage.setItem("bucketlist", JSON.stringify(bucket_list))
  }


  return (

    <View style={styles.container}>
      <Text style={styles.appTitle}>Your Dreams</Text>
      <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button title="   Save   " onPress={save_data} />
        <Button title="   Load   " onPress={load_data} />
      </View>
      <View style={bucketstyles.card}>
        <View style={{ margin: 10, flexDirection: "row", justifyContent: 'space-between' }}>
          <TextInput style={input_st} onChangeText={setDream} placeholder='Write here' />
          <TouchableOpacity onPress={function () {
            bucket_list.push({ dream: dream }); setExtra(!extra);;
          }}><AntDesign name="plussquareo" size={40} style={{ margin: 5 }} color="#00498c" /></TouchableOpacity>

          <TouchableOpacity onPress={function () { if (sel != null) bucket_list.splice(sel, 1); setSel(null); setExtra(!extra); }}>
            <AntDesign name="minussquareo" size={40} style={{ margin: 5 }} color="#8B0000" />
          </TouchableOpacity>
        </View>
        <FlatList data={bucket_list} extraData={extra} keyExtractor={(item) => item.dream}
          renderItem={
            function ({ item, index }) {
              const color = (index === sel) ? '#8B0000' : 'black';
              return <TouchableOpacity style={{ flexDirection: "row" }} onPress={function () { setSel(index); setExtra(!null) }}>
                <Text style={[{ fontSize: 30, bordeBottomrWidth: 1, flex: 1, padding: 5, margin: 5, marginLeft: 10, borderColor: 'gray' }, { color }]}># {item.dream}</Text>
              </TouchableOpacity>;
            }
          }
        />
      </View>
    </View>

  );

}




function BookScreen() { //modal 기능 활용해서 pop up
  const [N, setN] = useState("");

  function Decide(props) {
    if (props.num == 0) {
      return (
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "리틀 포레스트",
                  "⭐⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/리틀.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "Hunger Games",
                "⭐⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/m0.jpg')} />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "Harry Potter",
                  "⭐⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/m1.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "Begin Again",
                "⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/m2.jpg')} />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "Forzen",
                  "⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/m3.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "Avengers",
                "⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/m4.jpg')} />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "The Notebook",
                  "⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/m5.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "클래식",
                "⭐⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/m6.jpg')} />
            </TouchableOpacity>

          </View>

        </ScrollView>

      )
    }


    else if (props.num == 1) {
      return (
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "Me Before You",
                  "⭐⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/b0.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "우리가 빛의 속도로 갈 수 없다면",
                "⭐⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/b1.jpg')} />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "혐오스런 마츠코의 일생",
                  "⭐⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/b2.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "달러구트 꿈 백화점",
                "⭐⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/b7.jpg')} />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "채식주의자",
                  "⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/b3.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "위저드 베이커리",
                "⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/b4.jpg')} />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "나미야 잡화점의 기적",
                  "⭐⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/b5.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "아몬드",
                "⭐⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/b6.jpg')} />
            </TouchableOpacity>

          </View>

        </ScrollView>

      );
    }

    else {

      return (
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "사랑의 불시착",
                  "⭐⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/t8.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "Grey's Anatomy",
                "⭐⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/t1.jpg')} />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "괜찮아 사랑이야",
                  "⭐⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/t2.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "또오해영",
                "⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/t7.jpg')} />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "Emily in Paris",
                  "⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/t3.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "13 Reasons Why",
                "⭐⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/t4.jpg')} />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: "50%", height: 300 }}
              onPress={function () {
                Alert.alert(
                  "Elite",
                  "⭐⭐⭐⭐⭐",
                  [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
                );
              }} >
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/t5.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: "50%", height: 300 }} onPress={function () {
              Alert.alert(
                "the Politician",
                "⭐⭐⭐⭐⭐",
                [{ text: "OK", onPress: () => console.log("확인"), style: "cancel" }], { cancelable: false }
              );
            }}>
              <Image style={{ flex: "50%", width: '100%' }}
                source={require('./images/t6.jpg')} />
            </TouchableOpacity>

          </View>

        </ScrollView>
      );
    }
  }



  return (

    <View style={styles.container}>
      <Text style={styles.appTitle}>Your Interests</Text>
      <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-evenly' }} >
        <Button title="Movies" onPress={
          function () { setN(0); }
        } />
        <Button title="Books" onPress={
          function () { setN(1); }
        } />
        <Button title="Dramas" onPress={
          function () { setN(2); }
        } />
      </View>
      <Decide num={N} />


    </View>


  );
}

function FortuneScreen() {
  const [N, setN] = useState(0);
  const [M, setM] = useState(0);

  function SetImg(props) {
    if (props.num == 0) {
      return (
        <Image style={{ width: 400, height: 400 }}
          source={require('./original.png')} />
      )
    }
    else {
      return (
        <Image style={{ width: 400, height: 300 }}
          source={require('./break.png')} />
      )
    }
  }

  function Saying(props) {
    if (props.num == 0) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>

        </Text>
      );
    }
    else if (props.num == 1) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          A faithful friend is a strong defense.
        </Text>
      );
    }
    else if (props.num == 2) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          A golden egg of opportunity falls into your lap this month.
        </Text>
      );
    }
    else if (props.num == 3) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          A lifetime friend shall soon be made.
        </Text>
      );
    }
    else if (props.num == 4) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          A new perspective will come with the new year.
        </Text>
      );
    }
    else if (props.num == 5) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Advice, when most needed, is least heeded.
        </Text>
      );
    }
    else if (props.num == 6) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          An acquaintance of the past will affect you in the near future.
        </Text>
      );
    }
    else if (props.num == 7) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Believe it can be done.
        </Text>
      );
    }
    else if (props.num == 8) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Curiosity kills boredom. Nothing can kill curiosity.
        </Text>
      );
    }
    else if (props.num == 9) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Distance yourself from the vain.
        </Text>
      );
    }
    else if (props.num == 10) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Do not make extra work for yourself.
        </Text>
      );
    }
    else if (props.num == 11) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Every flower blooms in its own sweet time.
        </Text>
      );
    }
    else if (props.num == 12) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Behind this fortune is the love of my life.
        </Text>
      );
    }
    else if (props.num == 13) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          You have a secret admirer.
        </Text>
      );
    }
    else if (props.num == 14) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Follow what calls you.
        </Text>
      );
    }
    else if (props.num == 15) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Be passionate and totally worth the chaos.
        </Text>
      );
    }
    else if (props.num == 16) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Enter unknown territory.
        </Text>
      );
    }
    else if (props.num == 17) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Everything that is was first a dream.
        </Text>
      );
    }
    else if (props.num == 18) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Make self care a non-negotiable.
        </Text>
      );
    }
    else if (props.num == 19) {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Love yourself hard.
        </Text>
      );
    }
    else {
      return (
        <Text style={{ fontSize: 20, padding: 10, margin: 10 }}>
          Focus on the magic of things; yourself.
        </Text>
      );
    }
  }

  return (


    <View style={styles.container}>
      <Text style={styles.appTitle}>Your fortunes</Text>
      <SetImg num={M} />
      <Saying num={N} />
      <Button title="Break" onPress={
        function () { setN(Math.floor(Math.random() * 20 + 1)), setM(1); }
      } />
    </View>



  );

}















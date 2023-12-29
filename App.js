import React,{useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList,Image,ScrollView, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from './component/Header';
import HomeBar from './component/HomeBar';

function App() {
  const[dataGame] = useState([
    {
      id: '1',
      judul:'Lucky Twins',
      image: require('./assets/img/game1.jpg'),
    },
    {
      id: '2',
      judul:'Zeus Empires',
      image: require('./assets/img/game2.jpeg'),
    },
    {
      id: '3',
      judul:'Gold Blitz',
      image: require('./assets/img/game3.jpg'),
    },
    {
      id: '4',
      judul:'Bison Moon',
      image: require('./assets/img/game4.jpg'),
    },
    {
      id: '5',
      judul:'Wild Candy',
      image: require('./assets/img/images5.jpg'),
    },
  ]);

  return (
    <View style={{flex:1, backgroundColor: '#2C3333'}}>
      <Header />
      <ScrollView style={styles.home}>
      <Text style={{fontWeight:'bold', fontSize:14,marginLeft:5, color:'#FFFFFF'}} >Hi,Wisnu Mahendra</Text>
      <Text style={{marginBottom:5, fontSize:14,marginLeft:5, color:'#FFFFFF'}} >My Wallet</Text>

      <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.cardmoney}>
        <View >
        <Text style={{color:'#FFFFFF'}}>Belance</Text>
        <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:20}}>IDR 1.000.000.000</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop:20, fontSize:15}}>
          <Text style={{color:'#FFFFFF'}}>Card Owner</Text>
          <Text style={{color:'#FFFFFF'}}>Wisnu Mahendra</Text>
          </View>

          <View style={{justifyContent: 'flex-end',alignItems: 'flex-end', flex:1,}} >
          <Image source={require('./assets/img/Mastercard.png')} style={styles.mastercard}/>
          </View>
        </View> 
      </View>
      </LinearGradient>

      <Text style={{fontWeight:'bold', fontSize:14,marginTop:15, color:'#FFFFFF'}} >Populer Games</Text>
      <View style={styles.game}>
        <FlatList 
        data={dataGame}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>
        <TouchableOpacity 
          key={item.id}
          style={styles.listgame}
          onPress={() => navigation.navigate('Details', { itemId: item.id })}>
          <Image source={item.image} style={styles.gambargame}/>
          <Text style={styles.judul}>{item.judul}</Text>
        </TouchableOpacity>}/>
      </View>

      <Text style={{fontWeight:'bold', fontSize:14,marginTop:15, color:'#FFFFFF'}} >Recomended Games</Text>
      <View style={styles.game}>
        <FlatList 
        data={dataGame}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>
        <TouchableOpacity style={styles.listgame}>
          <Image source={item.image} style={styles.gambargame}/>
          <Text style={styles.judul}>{item.judul}</Text>
        </TouchableOpacity>}/>
      </View>
      </ScrollView>
      <HomeBar/>

    </View>
  );
}


const styles = StyleSheet.create({
  mastercard: {
    resizeMode:'contain',
    height:60,
    width:60,
  },
  cardmoney: {
    padding: 20,
    borderRadius: 15,
    marginRight: 10,
  },
  home: {
    flex:1, 
    marginLeft:10, 
    marginTop:7,
  },
  game:{
    marginTop: 10,
    flex: 1,
  },
  gambargame: {
    borderRadius:4,
    width:150,
    height:170,
    resizeMode:'cover',
  },
  listgame:{
    width: 165,
    elevation: 4,
  },
  judul:{
    textAlign: 'center',
    marginTop:7,
    width:150,
    height:24,
    backgroundColor:'#DAA520',
    borderRadius: 5,
    color:'#ffff',
  },
  homebar:{
    flexDirection:"row",
    backgroundColor:'#FFFFFF',
    elevation:3,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#0F0F0F',

  },
  tombol:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }



});


export default App;
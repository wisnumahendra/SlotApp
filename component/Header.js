import React,{useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Header = () => {
  return (
    <View style={styles.header}>
      <StatusBar hidden />
      <Image source={require('../assets/img/logo.png')} style={styles.logo}/>
      <Text style={styles.appName}>KING SLOT</Text>
      <TouchableOpacity onPress={() => handleSearch()}>
        <Ionicons name="search" size={24} color="black" style={styles.Icon} />
      </TouchableOpacity>
    </View>
  );
};

const handleSearch = () => {
  console.log('Tombol Pencarian Ditekan');
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor:'#0F0F0F',

  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color : '#DAA520', 
  },
  Icon: {
    marginLeft: 10,
    color : '#ffff',
  },
  logo:{
    resizeMode:"center",
    width:24,
    height:24,
  }
});

export default Header;

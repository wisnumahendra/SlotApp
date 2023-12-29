import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const HomeBar = () => {
    return(
    <View style={styles.homebar}>
        <TouchableOpacity style={styles.tombol}>
            <Ionicons name="home" size={24} color='#FFFFFF' />
            <Text style={{fontSize:12,color:'#FFFFFF'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tombol}>
            <Ionicons name="card" size={24} color='#FFFFFF' />
            <Text style={{fontSize:12,color:'#FFFFFF'}}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tombol}>
            <Ionicons name="game-controller" size={24} color='#FFFFFF' />
            <Text style={{fontSize:12,color:'#FFFFFF'}}>Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tombol}>
            <Ionicons name="person" size={24} color='#FFFFFF' />
            <Text style={{fontSize:12,color:'#FFFFFF'}}>User</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({

    homebar:{
        flexDirection:"row",
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

    export default HomeBar;
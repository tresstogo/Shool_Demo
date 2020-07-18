import React,{Component} from "react"
import {Text, View, TouchableOpacity} from "react-native"
import {Container} from "native-base"
import { Actions } from "react-native-router-flux";

//Componentes:
import HeaderR from "../REUSE/HeaderR"



class Home extends Component{

    render(){
        return( 
            <Container >
                <HeaderR></HeaderR>
                <View style={styles.MainView}>
                    <TouchableOpacity style={styles.TitleView} onPress={()=>{Actions.Students()}}>
                        <Text style={styles.Title}> Students </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TitleView} onPress={()=>{Actions.Teachers()}}>
                        <Text style={styles.Title}> Teachers </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TitleView} onPress={()=>{Actions.Groups()}}>
                        <Text style={styles.Title}> Groups </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}

const styles = {
    MainView:{
        backgroundColor:"#795548",
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },

    TitleView:{
        width:"90%",
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:"#194D33",
        borderRadius: 7.5,
        borderWidth: 2.5,
        borderColor: '#d6d7da',
        margin:"3%"
    },

    Title:{
        fontSize:30,
        color:"white"
    }
}

export default Home
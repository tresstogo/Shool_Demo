import React,{Component} from "react"
import {View,Text,TextInput, StyleSheet, Dimensions} from "react-native"
import {Button} from "native-base"
import { Actions } from "react-native-router-flux";


class AddStudent extends Component{

    constructor(props){
        super(props)
        this.state={
            Name:"",
            Group:"",
            OVR:"",
            IMG:"",
        }
    }
    send2SQL(){
        fetch('http://school-test.us-east-2.elasticbeanstalk.com/awsAddStudent.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        Table: "students",
        Name : this.state.Name,
        Group : this.state.Group,
        OVR : this.state.OVR,
        IMG : this.state.IMG,
      })
      }).then(response => response.json() )
      .then(response => {
        alert("New Student Inserted")
        console.warn(response);  
        Actions.Students();
      }).catch((error)=>alert(error));
    }
    render(){
        return(
            <View>
                <View style={{ height:Dimensions.get("window").height*.1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:25}}> Adding Student...</Text>
                </View>
                <View style={styles.inputCon}>
                    <TextInput placeholder={"Name:"} style={styles.input} onChangeText={
                            change=>this.setState({Name:change})}>
                    </TextInput>
                </View>
                <View style={styles.inputCon}>
                    <TextInput placeholder={"Group:"} style={styles.input} onChangeText={
                            change=>this.setState({Group:change})}>
                    </TextInput>
                </View>
                <View style={styles.inputCon}>
                    <TextInput placeholder={"OVR:"} style={styles.input} onChangeText={
                            change=>this.setState({OVR:change})}>
                    </TextInput>
                </View>
                <View style={styles.inputCon}>
                    <TextInput placeholder={"URL for image: "} style={styles.input} onChangeText={
                            change=>this.setState({IMG:change})}>
                    </TextInput>
                </View>
                <View style={{flex:1}}>
                    <Button rounded small style={{justifyContent:"center",
                    alignSelf:"center", backgroundColor:"#4A90E2", height:50, width:200}}
                    onPress={()=>this.send2SQL()}>
                        <Text style={{fontSize:35,color:"white"}}>DONE</Text>
                    </Button>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      alignItems: 'center',
      padding:"3%",
      flexDirection: "row"
    },
    input:{
        borderWidth:2,
        borderRightWidth:3,
        borderBottomWidth:3,
        borderColor:"black",
        padding:"3%",
        borderRadius:5,
        margin:"5%",
        width:"70%",
    },
    inputCon:{
        width:"90%", 
        alignSelf:"center",
        marginBottom:"3%"},
})

export default AddStudent
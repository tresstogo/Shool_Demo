import React, {Component} from "react"
import {Text, View, TextInput, FlatList} from "react-native"
import {Button, Spinner} from "native-base"

//Componentes
import Item from "../REUSE/GroupItem";

class Groups extends Component{

    constructor(props){
        super(props)
        this.state={
            Group:"",
            Found:false,
            db:""
        }
        }
      

    send2SQL(){
        this.setState({Found:"loading"})
            fetch('http://school-test.us-east-2.elasticbeanstalk.com/awsGroups.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            Group: String(this.state.Group),
          })
          }).then(response => response.json() )
          .then(response => {
            this.setState({Found:true,db:response})
           
          }).catch((error)=>
          {
            this.setState({Found:false,db:""});
        }
            
            );
        
        } 
    mostrarFila(comp){
        return <Item info={comp}/>
    }

    RenderRES(){
        const {Found}=this.state
        
        if(Found=="loading"){
            return(
                <View style={{justifyContent:"center",alignItems:"center", flex:6}}>
                    <Spinner color={"blue"} large/>
                </View>)
        }
        if(Found==true){
            return(
                <View style={styles.Flat}>
                    <FlatList
                    data={this.state.db}
                    renderItem={this.mostrarFila}
                    />
                </View>
            )
        }

        if(Found==false){
            return(
                <View style={{justifyContent:"center",alignItems:"center", flex:6}}>
                    <Text style={{fontSize:40, color:"gray"}}> No Group Found</Text>
                </View>
            )
        }
    }    
    render(){
        return(
            <View style={styles.container}>
                <View style={{ flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:40}}> Groups</Text>
                </View>
                <View style={styles.inputCon}>
                    <TextInput placeholder={"Search Group: "} style={styles.input} onChangeText={
                            change=>this.setState({Group:String(change)})}>
                    </TextInput>
                    <Button bordered  style={{justifyContent:"center",
                    alignSelf:"center", flex:1}}
                    onPress={()=>this.send2SQL()}>
                        <Text style={{fontSize:20, color:"#2196F3"}}>Search</Text>
                    </Button>
                </View>
                {this.RenderRES()}
            </View>
        )
    }
    
    }
    
    const styles = {
        container: {
          flex: 1,
          alignItems: 'center',
          padding:"3%",
          flexDirection: "column"
        },
        input:{
            borderWidth:2,
            borderRightWidth:3,
            borderBottomWidth:3,
            borderColor:"black",
            padding:"3%",
            borderRadius:5,
            margin:"5%",
            flex:3
        },
        inputCon:{
            width:"90%", 
            alignSelf:"center",
            marginBottom:"3%",
            flexDirection:"row",
            flex:1
            
        },
        Flat:{
            flex:6,
            alignItems:"center",
        }
    }

export default Groups
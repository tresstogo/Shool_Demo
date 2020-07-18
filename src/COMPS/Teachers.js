import React, {Component} from "react"
import {Text, View, Dimensions, FlatList} from "react-native"
import {Button} from "native-base"

//Componentes
import Item from "../REUSE/TeacherItem";
import { Actions } from "react-native-router-flux";

class Teachers extends Component{

    constructor(props){
        super(props);
        this.state={
          wHeight:Dimensions.get("window").height,
          wWidth:Dimensions.get("window").width,
            db:""
        }
    }

    componentWillMount(){
        return fetch('http://school-test.us-east-2.elasticbeanstalk.com/awsTeacherList.php')
      .then((response) =>{return response.json()})
      .then((response) => {
        this.setState({db:response})
      })
      .catch((error) => {
        console.warn(error);
      });
       
    }

    mostrarFila(comp){
        return <Item info={comp}/>
    }
    
    render(){ 
        return(
            <View style={{justifyContent:"center",alignItems:"center", flex:1}}>
                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:40,}}>Teachers</Text>
                    <Button bordered primary onPress={()=>{Actions.AddTeacher()}}
                    ><Text style={{fontSize:25, color:"#2196F3"}}> Add + </Text></Button>
                </View>
                <View style={styles.Flat}>
                    <FlatList
                    data={this.state.db}
                    renderItem={this.mostrarFila}
                    />
                </View>
            </View>
        )
    }
}


styles = {
    Flat:{
        flex:3,
        width:"90%",
        alignItems:"center",
    }
}
export default Teachers
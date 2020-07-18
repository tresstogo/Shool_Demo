import React, {Component} from "react"
import {Text, View, Dimensions, Image, TouchableOpacity} from "react-native"

class GroupItem extends Component{

    render(){
        const {Name, GroupS, OVR, IMG} = this.props.info.item
        return(
            <TouchableOpacity style={styles.MainView}>
                <View style={{flex:2}}>
                    <Image
                        style={{flex:1, height:"100%", width:"100%"}}
                        source={{uri:IMG}}
                        resizeMode={"stretch"}
                        bounce={false}
                    />
                </View>
                <View style={{flex:1, flexDirection:"row"}}>
                    <Text style={{flex:1, fontSize:15, textAlign:"center"}}>{GroupS}</Text>
                    <Text style={{flex:2, fontSize:20, textAlign:"center"}}>{Name}</Text>
                    <Text style={{flex:1, fontSize:15, textAlign:"center"}}>OVR: {OVR}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = {
    MainView:{
        borderRadius: 7.5,
        borderWidth: 2.5,
        borderColor: '#d6d7da',
        flex:1,
        width:Dimensions.get("window").width*.8,
        height:Dimensions.get("window").height*.2,
        margin:"3%"
    }
}

export default GroupItem
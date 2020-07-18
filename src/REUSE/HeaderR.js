import React, {Component} from "react"
import {View, Text} from "react-native"
import { Header, Body} from "native-base"

class HeaderR extends Component{
    render(){
        return(
            <View>
                <Header >
                    <Body>
                    <Text style={{fontSize:40}}> School </Text>
                    </Body>
                </Header>
            </View>
        )
    }
}

export default HeaderR
import React, {Component}from "react"
import {Scene,Router,ActionConst} from "react-native-router-flux"

//Componentes
import Home from  "./src/COMPS/Home"
import Students from "./src/COMPS/Students"
import Teachers from "./src/COMPS/Teachers"
import Groups from "./src/COMPS/Groups"
import AddStudent from "./src/COMPS/AddStudent"
import AddTeacher from "./src/COMPS/AddTeacher"

const RouterComp=()=>{
    return(
        <Router>
            <Scene 
            key="Scene_UNO"
            hideNavBar={true}
            type={ActionConst.RESET}
            >   
                <Scene
                    hideNavBar={true}
                    key="Home"
                    initial
                    component={Home}
                />
                <Scene
                    hideNavBar={true}
                    key="Students"
                    component={Students}
                />
                <Scene
                    hideNavBar={true}
                    key="Teachers"
                    component={Teachers}
                />
                <Scene
                    hideNavBar={true}
                    key="Groups"
                    component={Groups}
                />
                <Scene
                    hideNavBar={true}
                    key="AddStudent"
                    component={AddStudent}
                />
                <Scene
                    hideNavBar={true}
                    key="AddTeacher"
                    component={AddTeacher}
                />
            </Scene >
        </Router>
    )
    
}

export default RouterComp
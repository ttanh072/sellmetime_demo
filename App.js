import React from 'react';
import { View, Text} from "react-native";
import {Provider} from 'react-redux';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Welcome from './src/screens/Welcome'

const App = () => {
    return (
        <View style={{flex:1}}>
          <Welcome/> 
        </View>
    )
};

export default App;

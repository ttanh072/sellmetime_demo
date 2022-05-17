import React from "react";
import { View, Image } from "react-native";
import introLogo from '../static/icons/intro.png'
import styles from '../styles/intro'

const Intro = () => {
    return (
        <View style={styles.container}>
            <Image style= {styles.logo} resizeMode='contain' source={introLogo}/>
        </View>
    )
}

export default Intro;
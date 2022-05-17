import React from "react";
import { View, Image, TextInput } from "react-native";
import styles from "../styles/login";

export const CustomText = (props) => (
        <View style={styles.inputContainer}>
            <Image style={styles.logoInput} resizeMode='contain' source={props.source}/>
            <TextInput label={props.label} placeholder = {props.placeholder} mode="outlined"  style = {styles.inputStyle} secureTextEntry={props.secureTextEntry?true:false}/>
        </View>
)
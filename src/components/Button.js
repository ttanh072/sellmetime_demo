import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/login";

export const RoundButton = (props) => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>console.log("round click")}>
            <Text style={styles.buttonTextStyle}>{props.label}</Text>
        </TouchableOpacity>
    </View>
)

export const TextButton = (props) => (
    <View style={styles.buttonBottomContainer}>
        <TouchableOpacity style={styles.buttonBottomStyle} onPress={()=>console.log("left click")}>
            <Text style={styles.buttonBottomLeftTextStyle}>{props.leftLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBottomStyle} onPress={()=>console.log("right click")}>
            <Text style={styles.buttonBottomRightTextStyle}>{props.rightLabel}</Text>
        </TouchableOpacity>
    </View>
)

export const RoundTwoButton = (props) => (
    <View style={styles.buttonBottomContainer}>
        <TouchableOpacity style={styles.buttonBottomStyle}>
            <Text style={styles.buttonBottomLeftTextStyle}>{props.leftLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBottomStyle}>
            <Text style={styles.buttonBottomRightTextStyle}>{props.rightLabel}</Text>
        </TouchableOpacity>
    </View>
)
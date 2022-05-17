import React from "react";
import { View, Image, Text } from "react-native";
import { StyleSheet } from "react-native";
// import styles from "../styles/login";

export const RegisterRules = () => (
    <View style={styles.container}>
        <Text style={styles.text}>{`\u2022 `}After entering the correct password in the format, the Enter Email field becomes active</Text>
        <Text style={styles.text}>{`\u2022 `}Passwords must each contain at least one uppercase letter, one lowercase letter, a special character, and a number, and must be between 5 and 20 characters.</Text>
        <Text style={styles.text}>{`\u2022 `}Email verification code will expire 5 minutes after request.</Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex:2,
        top: 30,
        width: '85%',
    },
    text: {
        flex: 1,
        fontFamily: 'SF Pro Display',
        fontSize: 20,
        color: '#00266599',
    }
}) 
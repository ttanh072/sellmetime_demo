import React from "react";
import { View, Text, Image} from "react-native";
import logo from '../static/icons/logo.png'
import password from '../static/icons/password.png'
import email from '../static/icons/email.png'
import verification from '../static/icons/verification.png'
import { CustomText } from "../components/Text";
import { RoundTwoButton } from "../components/Button";
import { RegisterRules } from "../components/Rules";

const Register = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Update Password</Text>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Login</Text>
                <CustomText label='Password' placeholder = "Password" secureTextEntry={true} source={password}/>
                <CustomText label='PasswordConfirm' placeholder = "Password Confirm" secureTextEntry={true} source={password}/>
                <CustomText label='Email' placeholder = "Email" source={email}/>
                <CustomText label='VerificationCode' placeholder = "Verification code" source={verification}/>
                <RegisterRules/>
                <RoundTwoButton leftLabel='Cancel' rightLabel='Create'/>
            </View>
        </View>
    )
}

export default Register

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#002665',
        alignItems: 'center',
        height: '100%'
    },
    loginContainer: {
        flex: 6,
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 180,
    },
    loginText: {
        flex: 1,
        color: '#ffffff',
        fontStyle: 'normal',
        fontSize: 40,
        fontFamily: 'SF Pro Display'   ,
        fontWeight: 'bold',
        top: 50
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        borderBottomColor: '#0026653d', 
        borderBottomWidth: 1,
        
    },
    inputStyle: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        fontStyle: 'normal',
        fontSize: 22,
        color: '#002665',
        fontFamily: 'SF Pro Display',
    },
    logoInput: {
        width:30,
        height:50
    },
    buttonContainer: {
        top: 50,
        flex: .5,
        width: '90%',
    },
    buttonStyle: {
        flex: 1,
        backgroundColor: '#002665',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height:0,
    },
    buttonTextStyle: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontStyle: 'normal',
        fontSize: 22,
        color: '#ffffff',
        fontFamily: 'SF Pro Display'  ,
        top: 10
    },
    buttonBottomContainer: {
        top: 70,
        flex: 2,
        flexDirection: 'row'
    },
    buttonBottomStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonBottomLeftTextStyle: {
        flex: 1,
        fontStyle: 'normal',
        fontSize: 22,
        color: '#011E32',
        fontFamily: 'SF Pro Display'  
    },
    buttonBottomRightTextStyle: {
        flex: 1,
        fontStyle: 'normal',
        fontSize: 22,
        color: '#DA000B',
        fontFamily: 'SF Pro Display'  
    },
}) 
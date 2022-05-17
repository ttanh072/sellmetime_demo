import React from "react";
import { View, Text, Image} from "react-native";
import logo from '../static/icons/logo.png'
import password from '../static/icons/password.png'
import email from '../static/icons/email.png'
import styles from "../styles/login";
import { CustomText } from "../components/Text";
import { RoundButton, TextButton } from "../components/Button";

const Login = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode='contain' source={logo}/>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Login</Text>
                <CustomText label='Email' placeholder = "Email" source={email}/>
                <CustomText label='Password' placeholder = "Password" secureTextEntry={true} source={password}/>
                <RoundButton label='Login' />
                <TextButton leftLabel='New Account' rightLabel='Find Password'/>
            </View>
        </View>
    )
}

export default Login;
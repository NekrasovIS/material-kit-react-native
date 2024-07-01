import React from 'react';
import { StyleSheet } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

export default function StartScreen({ navigation }) {
    return (
        <Background>
            <Logo />
            <Header>Login Template</Header>
            <Paragraph>
                The easiest way to start with your amazing application.
            </Paragraph>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('LoginScreen')}
                style={styles.button}
            >
                Login
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate('RegisterScreen')}
                style={styles.button}
            >
                Sign Up
            </Button>
        </Background>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
    },
});

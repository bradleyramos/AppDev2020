// This is the screen the user will first see
import React from 'react';
import styles from '../styles/temp-style';
import {Button, 
        Text, 
        View, 
        TouchableWithoutFeedback } from 'react-native'; 

export default class HomeScreen extends React.Component {
    //navigationOptions can be either an object or function that returns configurations
    //see chat-screen.js of how this looks like as a function instead of an object
    //configuration: hides the header
    static navigationOptions = {
        headerShown: false
    };
    render() {
        // this is just reassigning the navigate function that comes from the screen's navigation prop
        // the button will call on it as just simply navigate() and take the user to the Profile screen
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Getting Started</Text>
            <Text style={styles.p}>Sign up or login to chat with friends and other students</Text>
            <Button title="Log In" onPress={() => navigate('Profile')} />
        </View>
        );
    }
}
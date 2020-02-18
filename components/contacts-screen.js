import React from 'react';
import styles from '../styles/temp-style';
import { Button, 
        Text, 
        View, 
        TouchableWithoutFeedback } from 'react-native';

export default class ContactsScreen extends React.Component {
    render(){
        return(
        <View styles={styles.container}>
            <Text style={styles.title}>Contacts Here</Text>
            <Text style={styles.p}>This is where all the contacts will go</Text>
        </View>
        );
    }
}
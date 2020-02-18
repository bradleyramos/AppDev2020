import React from 'react';
import styles from '../styles/temp-style';
import { Button, 
        Text, 
        View, 
        TouchableWithoutFeedback } from 'react-native';

export default class ProfileEditScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile Edit',
    };
    render(){
        return(
        <View styles={styles.container}>
            <Text style={styles.title}>Profile Editting Here</Text>
        </View>
        );
    }
}
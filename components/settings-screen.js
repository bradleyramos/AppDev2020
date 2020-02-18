import React from 'react';
import styles from '../styles/temp-style';
import { Button, 
        Text, 
        View, 
        TouchableWithoutFeedback } from 'react-native';

export default class SettingsScreen extends React.Component {
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>General Settings</Text>
                <Text style={styles.p}>This is were all the setting changes will go</Text>
                <Button title="Edit Profile" onPress={() => navigate('ProfileEdit')} />
            </View>
        );
    }
}

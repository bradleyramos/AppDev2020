import React from 'react';
import styles from '../styles/temp-style';
import {Button, 
        Text, 
        View, 
        TouchableWithoutFeedback } from 'react-native';

export default class ChatScreen extends React.Component {
  // This navigationOptions is a function that returns a configuration object
  // This way the header can interact with its screen (in this case navigating to another screen)
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Contact Name',
      headerRight: () => 
        <Button
        title=" = "
        onPress={() => navigation.navigate('Settings')}/>
    };
  };
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Chat Here</Text>
      </View>
    );
  }
}

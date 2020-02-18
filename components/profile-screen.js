// This is a good file to see how navigation works when doing it from the header vs within screen

import React from 'react';
import styles from '../styles/temp-style';
import { Button, 
        Text, 
        View, 
        TouchableWithoutFeedback } from 'react-native';

export default class ProfileScreen extends React.Component {
  //Navigation performed from the header  
  static navigationOptions = ({navigation}) => {
      return {
        title: 'Conversations',
        headerRight: () => 
          <Button
          title=" + "
          onPress={() => navigation.navigate('Contacts')}/>
      };
    };
  
    render(){
      //Navigation performed within the screen
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Stuff</Text>
          <Button style={styles.header_button} title="Person 1" onPress={() => navigate('Chat')} />
        </View>
        );
    }
} 


import { Button, 
        StyleSheet, 
        Text, 
        View, 
        TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 100,
    },
    
    p: {
        fontSize: 20,
        color: 'gray', 
        padding: 50,
    },
    
    header_button: {
        backgroundColor: 'transparent',
    }
});

export default styles;
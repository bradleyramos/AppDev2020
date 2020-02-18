// Screens Components
import HomeScreen from './components/home-screen';
import ProfileScreen from './components/profile-screen';
import ContactsScreen from './components/contacts-screen';
import SettingsScreen from './components/settings-screen';
import ChatScreen from './components/chat-screen';
import ProfileEditScreen from './components/profile-edit-screen';
// Library for navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


/*
If you ever get stuck I high recommend the documentation for React Navigation.
I just did stuff that can be found in the Fundamentals portion:
  https://reactnavigation.org/docs/en/getting-started.html

I also found this useful for when it came for how to use navigation props:
  https://reactnavigation.org/docs/en/navigation-prop.html 

You can see how navigation is implemented into screens by looking at home-screen.js and chat-screen.js
profile-screen.js is also good to see how to change screens from either the header or in the screen
*/

// Create the navigator
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Chat: {screen: ChatScreen},
  Contacts: {screen: ContactsScreen},
  Settings: {screen: SettingsScreen},
  ProfileEdit: {screen:ProfileEditScreen}
});

// Making a container and exporting it as the root component (Home)
const App = createAppContainer(MainNavigator);
export default App;


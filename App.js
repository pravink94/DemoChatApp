import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from './src/screens/ChatScreen';

const { Navigator, Screen } = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"ChatScreen"} >
          <Screen name='ChatScreen' component={ChatScreen} />
        </Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
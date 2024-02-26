import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/Home';
import MainAppbar from './components/MainAppbar';
import Settings from './screens/Settings';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();


export default function App() {
  return (
    <PaperProvider>
      <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#666' barStyle='light-content' />
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            header: (props) => <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff" />,
          }}
        >
          <Stack.Screen name='Home'>
          {() =>
          <Home />
          }
          </Stack.Screen>
          <Stack.Screen name='Settings' component={Settings}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

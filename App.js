import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GuessAgeScreen from './Screen/GuessAgeScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder="sssas" />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [text , setText] = useState('Open up App.js to start workings on your app!')
  const clicked = () => {
    setText('clicked');
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Guess National" component={GuessAgeScreen} options={{
          tabBarLabel: 'National',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="flag" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Guess Age" component={HomeScreen} options={{
          tabBarLabel: 'Age',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="human" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Guess Gender" component={SettingsScreen} options={{
          tabBarLabel: 'Gender',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gender-male-female" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
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

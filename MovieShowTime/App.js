import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieDetail from './screens/MovieDetail';
import MoviesList from './screens/MoviesList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={
      {
        headerStyle:{
          backgroundColor:'black',
          borderBottomWidth: 0,
          shadowOpacity:0
        },
        headerTintColor:'white'
      }
    }>

      <Stack.Screen
        name="MoviesList"
        component={MoviesList}
        options={
          {
            title: 'Movie show time example'
          }
        }
      
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={
          {
            title: null,
            headerTruncatedBackTitle:null
          }
        }
      />
    </Stack.Navigator>
  </NavigationContainer>
)


export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   
  },
});

import React from 'react';
import Home from './components/Home';
import EventDetails from './components/EventDetails';
import MyEvents from './components/MyEvents';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import {MyTabBar } from './components/TabBar';
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}  tabBarOptions={{inactiveTintColor:'rgba(255,255,255,0.5)'}}>
   <Tab.Screen
        name="Home"
        component={Home}
       
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (color) => (
            <Icon name="home" color={color.color} size={20} />
          ),
        }}
      /> 
          <Tab.Screen
        name="MyEvents"
        component={MyEvents}
        options={{
          tabBarLabel: 'My events',
          tabBarIcon: (color) => (
            <Icon name="home" color={color.color} size={20}/>
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName='MyTabs' screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator> 
  </NavigationContainer>
    
  );
}



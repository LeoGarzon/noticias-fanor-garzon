import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WebViewScreen from './screens/WebView';
import All from './screens/All';
import Business from './screens/Business';
import HealthScreen from './screens/Health';
import SportsScreen from './screens/Sports';
import TechnologyScreen from './screens/Technology';
import { Icon } from '@rneui/themed'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News" component={TabNavigator} />
        <Stack.Screen name="WebView" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={All}
        options={{
          tabBarIcon: (props) => (
            <Icon type='feather' name='home' color={props.color} />
          ),
        }} />
      <Tab.Screen name="Business" component={Business}
        options={{
          tabBarIcon: (props) => (
            <Icon type='feather' name='dollar-sign' color={props.color} />
          ),
        }} />
      <Tab.Screen name="Health" component={HealthScreen}
        options={{
          tabBarIcon: (props) => (
            <Icon type='feather' name='heart' color={props.color} />
          ),
        }} />
      <Tab.Screen name="Sports" component={SportsScreen}
        options={{
          tabBarIcon: (props) => (
            <Icon type='ionicon' name="tennisball-outline" color={props.color} />
          ),
        }} />
      <Tab.Screen name="Technology" component={TechnologyScreen}
        options={{
          tabBarIcon: (props) => (
            <Icon type='ionicon' name="hardware-chip-outline" color={props.color} />
          ),
        }} />
    </Tab.Navigator>
  );
}


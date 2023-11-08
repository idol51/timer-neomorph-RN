import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Alarm from '../screens/Alarm';
import Header from '../components/header';
import Timer from '../screens/Timer';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        header: (props) => <Header {...props} />,
        animation: 'none'
      }}>
        <Screen
          name='Alarm'
          component={Alarm}
        />
        <Screen
          name='Timer'
          component={Timer}
        />
        <Screen
          name='Stop Watch'
          component={Alarm}
        />
      </Navigator>
    </NavigationContainer>
  )
}

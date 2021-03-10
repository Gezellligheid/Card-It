import React from 'react'
import { View, Text } from 'react-native'
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function MainStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	)
}

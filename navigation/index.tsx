import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Screen } from 'react-native-screens';
import Home from '../Coponents/Screens/Home';
import AddNewTask from '../Coponents/Screens/AddNew';
import Existing from '../Coponents/Screens/Existing';
import Completed from '../Coponents/Screens/Completed';

const stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <stack.Navigator>
        <stack.Screen name='Home' component={Home} options={{headerShown:false}} />
        <stack.Screen name='AddNew' component={AddNewTask} options={{headerShown:false}}/>
        <stack.Screen name='Existing' component={Existing} options={{headerShown:false}}/>
        <stack.Screen name='Completed' component={Completed} options={{headerShown:false}}/>
    </stack.Navigator>
  )
}

export default MyStack
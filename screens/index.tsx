import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Help from './help';
import CustomHeaderText from '../components/customHeaderText';
import BackIcon from '../assets/icons/back.svg';
import SearchIcon from '../assets/icons/search.svg';

const Screens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Help'
        component={Help}
        options={{
          headerTitle: (props) => <CustomHeaderText title='Help Center' {...props} />,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => <BackIcon />,
          headerRight: (props) => <SearchIcon />
        }}
      />
    </Stack.Navigator>
  )
}

export default Screens;

const styles = StyleSheet.create({})
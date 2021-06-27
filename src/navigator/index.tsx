/*
 * @Author: your name
 * @Date: 2021-06-26 19:06:27
 * @LastEditTime: 2021-06-27 15:00:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\navigator\index.tsx
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,StackNavigationProp} from '@react-navigation/stack'
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';

 export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;

}

export type RootStackNavigation=StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator<RootStackParamList>();
class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='float'
        >
          <Stack.Screen name="Home" component={Home}  options={{headerTitleStyle :{alignSelf:'center'} }} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;

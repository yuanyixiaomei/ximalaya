/*
 * @Author: your name
 * @Date: 2021-06-26 19:06:27
 * @LastEditTime: 2021-08-25 20:45:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\navigator\index.tsx
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack'
import Home from '@/pages/Home';
import Category from '@/pages/Category/index';
import FlatlistPage from '@/pages/FlatlistPage';
import Detail from '@/pages/Detail';

import BottomTabs from '@/navigator/BottomTabs';
import { Platform, StyleSheet, StatusBar } from 'react-native';

export type RootStackParamList = {
  BottomTabs: {
    screen?: string
  };
  Category: {
    screen?:string
  }
  Detail: {
    id: number;
  };

}

export type RootStackNavigation = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator<RootStackParamList>();
class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='float'
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,//开启手势
            gestureDirection: 'horizontal', //设置手势从左往右滑动关闭
            headerStatusBarHeight:StatusBar.currentHeight,
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0, //去除手势滑动 的时候安卓的阴影
                  boderBottomWidth: StyleSheet.hairlineWidth,

                },
                ios: {

                }
              })
            }



          }
          }
        >
          <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerTitle: '首页' }} />
          <Stack.Screen name="Category" component={Category} options={{headerTitle :'分类'}}/>


        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;

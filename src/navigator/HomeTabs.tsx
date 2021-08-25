/*
 * @Author: your name
 * @Date: 2021-07-24 09:22:57
 * @LastEditTime: 2021-08-12 20:43:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\navigator\HomeTabs.tsx
 */

import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabBar,
  MaterialTopTabView,
} from '@react-navigation/material-top-tabs';
import { TabActionHelpers } from '@react-navigation/native';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import { View, StyleSheet } from 'react-native';
import TopTabBarWrapper from '@/pages/views/TopTabBarWrapper'


const Tab = createMaterialTopTabNavigator()
class HomeTabs extends React.Component {
  renderTabBar = (props: MaterialTopTabBarProps) => {
    return  <TopTabBarWrapper {...props} />
  }
  render() {
    return (<Tab.Navigator
      lazy
      sceneContainerStyle={styles.seneContaoner}
      tabBar={this.renderTabBar}
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: {
          width: 80
        }, indicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
        activeTintColor: '#f86442',
        inactiveTinColor: '#333'
      }}>
      <Tab.Screen name='Home' component={Home} options={{ tabBarLabel: "推荐" }} />
      <Tab.Screen name='Home1' component={Home} options={{ tabBarLabel: "推荐" }} />
      {/* <Tab.Screen name='Home1' component={Home} /> */}
      {/* <Tab.Screen name='Detail' component ={Detail}/> */}

    </ Tab.Navigator >)



  }
}


const styles = StyleSheet.create({
  seneContaoner: {
    backgroundColor:'transparent'
  }
})
export default HomeTabs
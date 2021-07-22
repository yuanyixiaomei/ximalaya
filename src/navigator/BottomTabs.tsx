/*
 * @Author: your name
 * @Date: 2021-06-27 16:39:35
 * @LastEditTime: 2021-07-22 22:42:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\navigator\BottomTabs.tsx
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';

import Icon from '@/assets/iconfont/index';

import Account from '@/pages/Account';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import { RouteProp, TabNavigationState } from '@react-navigation/native';



import { RootStackNavigation, RootStackParamList } from '@/navigator/index'

import { IconProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export type BottomTabParamList = {
    Home: undefined,
    Listen: undefined,
    Found: undefined,
    Account: undefined
}



type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
    state?: TabNavigationState
}
interface IProps {
    navigation: RootStackNavigation;
    route: Route;
}


const Tab = createBottomTabNavigator<BottomTabParamList>();


function getHeaderTitle(route: Route) {
    const routeName = route.state ? route.state.routes[route.state.index].name : route.params?.screen || 'HOME'

    switch (routeName) {
        case '"Home"':
            return '首页';
        case 'Listen':
            return '我听';
        case 'Found':
            return '发现';
        case 'Account':
            return '我的';
        default:
            return '首页';
    }

}

class BottomTabs extends React.Component<IProps>{
    componentDidUpdate() {
        const { navigation, route } = this.props
        navigation.setOptions({
            headerTitle: getHeaderTitle(route)
        })

    }
    render() {
        return (
            <Tab.Navigator tabBarOptions={{ activeTintColor: '#f86442' }}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarLabel: '首页',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="icon-shouye" color={color} size={18} />
                    ),
                }} />

                <Tab.Screen name='Listen' component={Listen} options={{
                    tabBarLabel: '我听',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="icon-tingshu" color={color} size={18} />
                    ),
                }} />

                <Tab.Screen name='Found' component={Found} options={{
                    tabBarLabel: '查找',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="icon-icon-test" color={color} size={18} />
                    ),
                }} />

                <Tab.Screen name='Account' component={Account} options={{
                    tabBarLabel: '我的',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="icon-red-heart" color={color} size={18} />
                    ),
                }} />


            </Tab.Navigator>

        )

    }
}
export default BottomTabs

// Class  MyTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     );
//   }
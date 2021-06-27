/*
 * @Author: your name
 * @Date: 2021-06-26 19:00:42
 * @LastEditTime: 2021-06-27 11:23:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Home.TSX
 */
import React from 'react';
import { View, Text, ViewPropTypes ,Button} from 'react-native';

import { RootStackNavigation} from '@/navigator/index'


interface Iprops{
  navigation:RootStackNavigation
}
class Home extends React.Component<Iprops>{
  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Detail")
    
  }
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button title='跳转到详情页面' onPress={ this.onPress}></Button>
      </View>
    );
  }
}
export default Home;

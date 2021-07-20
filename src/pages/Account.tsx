/*
 * @Author: your name
 * @Date: 2021-06-26 19:00:42
 * @LastEditTime: 2021-06-27 16:57:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Account.TSX
 */
import React from 'react';
import { View, Text, ViewPropTypes ,Button} from 'react-native';

import { RootStackNavigation} from '@/navigator/index'


interface Iprops{
  navigation:RootStackNavigation
}
class Account extends React.Component<Iprops>{
  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Detail",{'id':100})
    
  }
  render() {
    return (
      <View>
        <Text>Account</Text>
        <Button title='跳转到详情页面' onPress={ this.onPress}></Button>
      </View>
    );
  }
}
export default Account;

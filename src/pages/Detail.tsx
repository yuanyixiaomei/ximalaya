/*
 * @Author: your name
 * @Date: 2021-06-26 19:00:42
 * @LastEditTime: 2021-06-27 16:27:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Home.TSX
 */
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import { RootStackParamList } from '@/navigator/index';
interface Iprops{
  route:RouteProp<RootStackParamList,'Detail'>
}
class Detail extends React.Component<Iprops> {
  
  render() {
    const { route } = this.props;
    return (
      <View>
        <Text>Detail</Text>
        <Text>{route.params.id }</Text>
      </View>
    );
  }
}
export default Detail;

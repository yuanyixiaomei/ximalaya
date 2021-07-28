/*
 * @Author: your name
 * @Date: 2021-06-26 19:00:42
 * @LastEditTime: 2021-07-28 22:28:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Home.TSX
 */
import React from 'react';
import { View, Text, ViewPropTypes, Button, ScrollView, FlatList ,ListRenderItemInfo} from 'react-native';
import { IChannel } from '@/models/home';
interface IProps{
  data:IChannel[]
}

class Channeltem extends React.Component<IProps> {
  componentDidMount() {

  }

  render() {
    // const { data } = this.props
    return (
      <View>
        <Text>
          item
          {/* {item} */}
        </Text>
      </View>
    );
  }
}
export default Channeltem;

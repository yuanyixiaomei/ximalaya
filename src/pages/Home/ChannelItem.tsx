/*
 * @Author: your name
 * @Date: 2021-06-26 19:00:42
 * @LastEditTime: 2021-07-31 10:10:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Home.TSX
 */
import React from 'react';
import { View, Text, ScrollView, FlatList, ListRenderItemInfo, StyleSheet, Image } from 'react-native';
import { IChannel } from '@/models/home';
import Touchable from '@/components/Touchable'

import Icon from '@/assets/iconfont/index';

interface IProps {
  data: IChannel,
  onPress:(data:IChannel)=>void
}

class Channeltem extends React.PureComponent<IProps> {
  componentDidMount() {

  }
  onPress = () => {
    const { data, onPress } = this.props
    if (typeof onPress === 'function') {
      onPress(data)
    }
  }

  render() {
    const { data } = this.props
    return (
      <Touchable onPress={this.onPress} style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.image} />

        <View style={styles.rightContainer}>

          <Text style={styles.title} numberOfLines={1}> {data.title}</Text>
          <Text style={styles.remark} numberOfLines={2}> {data.remark} </Text>

          <View  style={styles.bottom}>
            <View style={styles.playedView}>
              <Icon name='icon-icon-test' />
              <Text style={styles.number}>
                {data.played}
              </Text>
            </View>

            <View style={styles.playedView}>
              <Icon name='icon-icon-test' />
              <Text  style={styles.number}>
                {data.playing}
              </Text>
            </View>
          </View>
        </View>
      </Touchable>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#CCC',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation:1
    
  },
  image: {
    width: 85,
    height: 85,
    marginRight:5,
    borderRadius: 8,
    backgroundColor: '#dedede'
  },
  rightContainer: {

    flex: 1,
    justifyContent:'space-around',
  },
  title: {
    fontSize: 16,
    marginBottom: 10
  },
  remark: {
    marginBottom: 5,
    padding: 5,
    
    backgroundColor:'#f8f8f8'

  }
  , bottom: {
    flexDirection:'row'
  },
  playedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:20
  },
  number: {
    marginLeft:5
    
  }

})
export default Channeltem;

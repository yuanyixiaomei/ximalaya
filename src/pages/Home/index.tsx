/*
 * @Author: your name
 * @Date: 2021-06-26 19:00:42
 * @LastEditTime: 2021-07-29 22:28:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Home.TSX
 */
import React from 'react';
import { View, Text, ViewPropTypes, Button, ScrollView, FlatList, ListRenderItemInfo } from 'react-native';
import { RootStackNavigation } from '@/navigator/index'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "@/models/index"
import { IChannel } from "@/models/home"
import Carousel from './Carousel';
import Guess from './Guess';
import ChannelItem from './ChannelItem';


const mapStateToProps = ({ home, loading }: RootState) => ({
  carousels: home.carousels,
  guess: home.guess,
  channels: home.channels,
  loading: loading.effects['home/fetchCarousels']

})


const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>


interface Iprops extends ModelState {
  navigation: RootStackNavigation
}

class Home extends React.Component<Iprops>{
  componentDidMount() {

    const { dispatch } = this.props;
    dispatch({
      type: 'home/fetchCarousels',

    })

    dispatch({
      type: 'home/fetchChannels',

    })

  }
  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Detail", { 'id': 100 })

  }

  renderItem = ({ item }: ListRenderItemInfo<IChannel>) => {
    return <ChannelItem data={item} />
  }


  get header() {
    const { carousels } = this.props
    return (
      <View>
        <ScrollView>
          <Carousel data={carousels} />
          <Guess />

        </ScrollView>

      </View>
    )

  }



  render() {
    const { channels } = this.props

    return (


      <FlatList ListHeaderComponent={this.header} data={channels} renderItem={this.renderItem} />


    );
  }
}
export default connector(Home);

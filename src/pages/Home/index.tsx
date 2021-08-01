/*
 * @Author: your name
 * @Date: 2021-06-26 19:00:42
 * @LastEditTime: 2021-07-31 20:10:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Home.TSX
 */
import React from 'react';
import { View, Text, ViewPropTypes, Button, ScrollView, FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
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
  hasMore:home.pagination.hasMore,
  pagination:home.pagination,
  loading: loading.effects['home/fetchChannels']

})


const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>


interface Iprops extends ModelState {
  navigation: RootStackNavigation
}
interface IState {
  refreshing: boolean

}

class Home extends React.Component<Iprops, IState>{
  state = {
    refreshing: false
  }
  componentDidMount() {

    const { dispatch } = this.props;
    dispatch({
      type: 'home/fetchCarousels',

    })

    dispatch({
      type: 'home/fetchChannels',

    })

  }
  onPress = (data: IChannel) => {
    console.log(data, '2')


  }

  renderItem = ({ item }: ListRenderItemInfo<IChannel>) => {



    return <ChannelItem data={item} onPress={this.onPress} />
  }

  keyExtractor = (item: IChannel) => {
    return item.id

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


  onRefresh = () => {
    this.setState({
      refreshing: true
    })



  }

  onEndReached = () => {

    const { dispatch, loading, hasMore } = this.props;
    if(loading||!hasMore) return
    dispatch({
      type: 'home/fetchChannels',
      payload: {
        loadMore: true
      }
    })


  }
  get empty() {
    const { loading, hasMore, channels } = this.props
    if(loading) return 

    return (
      <View style={style.empty}>
        <Text>
         暂无数据
        </Text>
      </View>
    )
    
  }
  get footer() {
    const { loading, hasMore, channels } = this.props
    if (!hasMore) {
      return (
        <View style={style.end}>
          <Text>
            --没有更多数据，我是有底线的--
          </Text>
        </View>
      )
      
    }

    if (loading&&hasMore&&channels.length>0) {
      return (
        <View style={style.loading}>
          <Text>
            正在加载中
          </Text>
        </View>
      )
      
    }
    
  }


  render() {
    const { channels } = this.props
    const { refreshing } = this.state

    return (

      <FlatList
        ListHeaderComponent={this.header}
        ListFooterComponent={this.footer}
        ListEmptyComponent={this.empty}
        keyExtractor={this.keyExtractor}
        data={channels}
        renderItem={this.renderItem}
        onRefresh={this.onRefresh}
        refreshing={refreshing}
      
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.2}
      />


    );
  }
}
const style = StyleSheet.create({
  end: {
    alignItems: 'center',
    paddingVertical:10,
  },
  loading: {
    alignItems: 'center',
    paddingVertical:10,
    
  }, empty: {
    alignItems: 'center',
    paddingVertical:100,
    
  }
})
export default connector(Home);

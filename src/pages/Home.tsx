/*
 * @Author: your name
 * @Date: 2021-06-26 19:00:42
 * @LastEditTime: 2021-07-22 19:21:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Home.TSX
 */
import React from 'react';
import { View, Text, ViewPropTypes, Button } from 'react-native';
import { RootStackNavigation } from '@/navigator/index'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "@/models/index"


const mapStateToProps = ({ home, loading }: RootState) => ({
  num: home.num,
  loading: loading.effects['home/asyncAdd']

})


const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>


interface Iprops extends ModelState {
  navigation: RootStackNavigation
}

class Home extends React.Component<Iprops>{
  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Detail", { 'id': 100 })

  }


  HandelAdd = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/add',
      payload: {
        num: 10,

      }
    })

  }

  HandelAsyncAdd = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {
        num: 2

      }
    })

  }
  render() {
    const { num ,loading} = this.props
    return (
      <View>
        <Text>Home{num}</Text>
        <Text>{ loading?'正在加载':''}</Text>
        <Button title='加' onPress={this.HandelAdd}></Button>
       
        <Button title='异步添加' onPress={this.HandelAsyncAdd}></Button>
        <Button title='跳转到详情页面' onPress={this.onPress}></Button>
      </View>
    );
  }
}
export default connector(Home);

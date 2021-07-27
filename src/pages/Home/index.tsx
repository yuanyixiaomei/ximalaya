/*
 * @Author: your name
 * @Date: 2021-06-26 19:00:42
 * @LastEditTime: 2021-07-27 22:59:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Home.TSX
 */
import React from 'react';
import { View, Text, ViewPropTypes, Button,ScrollView } from 'react-native';
import { RootStackNavigation } from '@/navigator/index'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "@/models/index"
import Carousel from './Carousel';
import Guess from './Guess';


const mapStateToProps = ({ home, loading }: RootState) => ({
  carousels: home.carousels,
  guess: home.guess,
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

  }
  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Detail", { 'id': 100 })

  }




  render() {
    const { loading, carousels } = this.props
    return (
      <ScrollView>

        <Carousel data={carousels} />
        <Guess />


      </ScrollView>
    );
  }
}
export default connector(Home);

/*
 * @Author: your name
 * @Date: 2021-08-01 13:18:59
 * @LastEditTime: 2021-08-25 20:48:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\views\TopTabBarWrapper.tsx
 */
import React from 'react'
import { MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { View, StyleSheet, Text } from 'react-native';
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import Touchable from '@/components/Touchable'
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'

import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "@/models/index"



const mapStateToProps = ({ home }: RootState) => ({
  linearColors: home.carousels ? home.carousels[home.activeCarouselIndex]?.colors : undefined,
  gradientVisible:home.gradientVisible

})


const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>


type IProps = MaterialTopTabBarProps & ModelState;




class TopTabBarWrapper extends React.Component<IProps> {

  goCategory = () => {
    const { navigation } = this.props
    navigation.navigate('Category')
    
  }

  get linearGradient() {
    const { linearColors = ["#ccc", '#e2e2e2'] ,gradientVisible} = this.props
    console.log(linearColors, 'linearColors')
    if (gradientVisible) {
      return (

        <View style={styles.gradient}>
             <AnimatedLinearGradient customColors={linearColors}  />
  
        </View>
  
     
      )
    } else {
      return null
    }
   
    
  }

  render() {
  let    { gradientVisible ,indicatorStyle,...prop} = this.props
    let textStyle = styles.text
    let activeTintColor = "#333"

    if (gradientVisible) {
      textStyle = styles.whiteText
      activeTintColor = "#fff"
      if (indicatorStyle) {
        indicatorStyle=StyleSheet.compose(indicatorStyle,styles.whiteBackgroundColor)
      }
    } 

   

    
    return (
    <>
      <View style={styles.container}>
      {this.linearGradient}
        <View style={styles.topTabBarView}>
          <MaterialTopTabBar {...prop}  indicatorStyle={indicatorStyle} activeTintColor={activeTintColor} style={styles.tabbar} />
          <Touchable style={styles.categaryView}  onPress={this.goCategory}>
            <Text style={textStyle}>
              分类
            </Text>
          </Touchable>
        </View>

        <View style={styles.bottom}>
        <Touchable style={styles.searchBtn}>
          <Text  style={textStyle}>
            搜索
         </Text>
          </Touchable>
          
          <Touchable style={styles.historyBtn}>
          <Text  style={textStyle} >
            历史记录
         </Text>
        </Touchable>

        </View>
        </View>
        </>
    )
  }

}

const styles = StyleSheet.create({
  text: {
    color :'#333'
  },
  whiteText: {
    color :'#fff'
    
  },
  topTabBarView: {
    flexDirection: 'row',
    alignItems: "center",
  },

  container: {
    backgroundColor: '#fff',
    paddingTop: getStatusBarHeight()
  },

  tabbar: {
    flex: 1,
    elevation: 0,
    overflow: 'hidden',
    backgroundColor:'transparent'
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  categaryView: {
    paddingHorizontal: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc'
  },
  searchBtn: {
    flex: 1,
    paddingLeft: 12,
    height: 30,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.1)'

  },
  historyBtn: {
    marginLeft:24
    
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height:200
    
  },
  whiteBackgroundColor: {
    backgroundColor:'#fff'
  }

})

export default connector(TopTabBarWrapper)  



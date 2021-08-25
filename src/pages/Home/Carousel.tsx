/*
 * @Author: your name
 * @Date: 2021-07-24 11:36:18
 * @LastEditTime: 2021-08-11 22:55:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Home\Carrousel.tsx
 */
import React from 'react'
import SnapCarousel, { ParallaxImage, AdditionalParallaxProps, Pagination } from 'react-native-snap-carousel'
import { viewportWith, wp, hp } from '@/utils/index.tsx'
import { viewportheight } from '@/utils/index.tsx'
import { StyleSheet, View } from 'react-native'
import { ICarousel } from "@/models/home"
import { RootStackNavigation } from '@/navigator/index'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "@/models/index"





const sliderWidth = viewportWith
const sliderHeight = viewportheight
const sidewidth = wp(90)
const itemWidth = sidewidth + wp(2) * 2
 export const sideheight = wp(46)
const itemHeight = sideheight + wp(2) * 2

 
const mapStateToProps = ({ home, loading }: RootState) => ({
  data: home.carousels,
  activeCarouselIndex:home.activeCarouselIndex

})


const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>


interface IProps extends ModelState {
}

class Carousel extends React.Component<IProps> {

  onSnapToItem = (index: number) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/setState',
      payload: {
        activeCarouselIndex:index
      }
    })
   
  }

  renderItem = ({ item }: { item: ICarousel }, parallaxProps?: AdditionalParallaxProps) => {
    return (
      <ParallaxImage source={{ uri: item.image }}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8}
        showSpinner
        spinnerColor='rgba(0,0,0,0.25)'
        {...parallaxProps} />

      //  <Image source={{ uri: item }} style={styles.image} />

    )

  }

  get paginatiion() {
    const { data, activeCarouselIndex } = this.props
    console.log(data,'11')


    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          containerStyle={styles.paginationContainer}
          activeDotIndex={activeCarouselIndex}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          inactiveDotScale={0.8}
          inactiveDotOpacity={0.4}
          dotsLength={data.length} />
      </View>
    )


  }

  render() {

    const {data}=this.props
    return (
      <View>
        <SnapCarousel data={data}
          renderItem={this.renderItem}
          itemWidth={itemWidth}
          sliderWidth={sliderWidth}
          hasParallaxImages
          onSnapToItem={this.onSnapToItem}
          loop
          autoplay
        />
        {this.paginatiion}
      </View>

    )

  }
}
const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover'


  },

  paginationContainer: {
    position: 'absolute',
    top: -20,
    borderRadius:6,
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingHorizontal: 3,
    paddingVertical: 4,
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  imageContainer: {
    borderRadius: 8,
    width: itemWidth,
    height: sideheight,
  },
  dotContainer: {

    marginHorizontal: 6,
    borderRadius: 6,

  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor:'rgba(255,255,255,0.92)'
  }
})
export default connector(Carousel) 
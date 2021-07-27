/*
 * @Author: your name
 * @Date: 2021-07-26 23:03:47
 * @LastEditTime: 2021-07-27 23:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Home\Guess.tsx
 */
import React from 'react'
import Icon from '@/assets/iconfont/index';
import { StyleSheet, View, Text, FlatList, Image, Alert } from 'react-native'
import Touchable from '@/components/Touchable'
import { IGuess } from "@/models/home"
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '@/models/index';

const mapStateToProps = ({ home }: RootState) => {
  return {
    guess: home.guess

  }
}

const connector = connect(mapStateToProps)
type ModelState = ConnectedProps<typeof connector>


class Guess extends React.Component<ModelState>{

  componentDidMount() {
    this.fetch()

  }
  fetch = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/fetchGuess'
    })

  }

  renderItem = ({ item }: { item: IGuess }) => {
    return (
      <Touchable style={styles.item} onPress={() => {
      }}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text numberOfLines={2}>
          {item.title}
        </Text>
      </Touchable>
    )
  }
  render() {
    const { guess } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRight}>
            <Icon name="icon-red-heart"  />
            <Text style={styles.headerTitle}>
              猜你喜欢
            </Text>
          </View>

          <View style={styles.headerRight}>
            <Text style={styles.moreText}>
              更多
            </Text>
            <Icon name="icon-icon-test"/>
          </View>
        </View>

        <FlatList
          style={styles.list}
          data={guess}
          numColumns={3}
          renderItem={this.renderItem}
        />
 
        <Touchable style={styles.changeGuess} onPress={() => {
          this.fetch()
          
        }} >

          <Icon name="icon-icon-test" color='red'/>
          <Text  style={styles.changeGuessText} >
           换一批
          </Text>

        </Touchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 16
  },
  item: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: "#efef",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  headerRight: {
    flexDirection: 'row',
    alignItems:'center'
  },
  headerTitle: {
    marginLeft: 5,
    color: '#333'
  },
  image: {
    width: '100%', height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  moreText: {
    marginRight: 5,
    color: '#6f6f6f'
  },
  changeGuess: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,
  },
  changeGuessText: {
    marginLeft:5
    
  }, list: {
    padding:10

  }

})

export default connector(Guess) 

/*
 * @Author: your name
 * @Date: 2021-07-11 15:46:44
 * @LastEditTime: 2021-07-11 16:29:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\FlatlistPage.tsx
 */
// import { StatusBar } from 'expo-status-bar';
// import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class FlatListPage extends React.Component {
  constructor(props) {
    super(props);
    this.flatListRef = null;
  }

  componentDidMount() {
    setTimeout(() => this.flatListRef.scrollToIndex({ index: 10 }), 1000);
  }

  renderItem({ item }) {
    return (
      <View style={styles.listItem}>
        <Text>{item.data}</Text>
      </View>
    );
  }

  getItemLayout(data, index) {
    return { length: styles.listItem.height+10, offset:(styles.listItem.height+10)  * index, index };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={(ref) => this.flatListRef = ref}
          data={DATA}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item) => item.id}
          getItemLayout={this.getItemLayout.bind(this)} 
          />
        {/* <StatusBar style="auto" /> */}

        {/* getItemLayout={this.getItemLayout.bind(this)}  */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: Constants.statusBarHeight
  },
  listItem: {
    marginBottom:10,
    flex: 1,
    height: 40,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    paddingLeft: 10
  }
});

const DATA = [...Array(2000).keys()].map((key) => ({ id: key.toString(), data: 'Item ' + key.toString()}));

/*
 * @Author: your name
 * @Date: 2021-06-06 21:01:38
 * @LastEditTime: 2021-07-25 13:41:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AwesomeTSProject\src\index.tsx
 */
// import React from 'react';
// import {test} from '@/utils/index'
// import {View, Text} from 'react-native';
// class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>11</Text>
//       </View>
//     );
//   }
// }


// export default App
import React from 'react';
import { Provider } from 'react-redux';
import Navigator from '@/navigator/index';
import store from '@/config/dva';
import { StatusBar } from 'react-native';
// import BottomTabs from '@/navigator/BottomTabs';
import '@/config/http'

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>

        <Navigator />
        <StatusBar backgroundColor='transparent' barStyle="dark-content" translucent/>


      </Provider>
    )
  }
}
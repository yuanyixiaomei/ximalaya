/*
 * @Author: your name
 * @Date: 2021-06-06 21:01:38
 * @LastEditTime: 2021-07-22 17:17:56
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
import {Provider} from 'react-redux';
import Navigator from '@/navigator/index';
import store from '@/config/dva';
// import BottomTabs from '@/navigator/BottomTabs';

export default class extends React.Component{
  render() {
    return (
      <Provider store={store}>

        <Navigator/>


      </Provider>
    )
  }
}
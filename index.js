/*
 * @Author: your name
 * @Date: 2021-06-06 11:34:43
 * @LastEditTime: 2021-06-26 20:37:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AwesomeTSProject\index.js
 */
/**
 * @format
 */

// import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './src';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

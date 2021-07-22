/*
 * @Author: your name
 * @Date: 2021-07-22 16:44:25
 * @LastEditTime: 2021-07-22 19:12:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\models\index.ts
 */
import home from './home'
import { Model } from 'dva-core-ts';
import { DvaLoadingState } from 'dva-loading-ts';

const models = [home];
export type RootState = {
  home: typeof home.state;
  loading: DvaLoadingState
  
}
export default models
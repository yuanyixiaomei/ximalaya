/*
 * @Author: your name
 * @Date: 2021-07-22 16:44:25
 * @LastEditTime: 2021-08-25 20:26:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\models\index.ts
 */
import home from './home'
import category from './category'
import { DvaLoadingState } from 'dva-loading-ts';

const models = [home,category];
export type RootState = {
  home: typeof home.state;
  category:typeof category.state
  loading: DvaLoadingState
  
}
export default models
/*
 * @Author: your name
 * @Date: 2021-07-27 18:56:00
 * @LastEditTime: 2021-07-27 22:59:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\components\Touchable.tsx
 */

import React from 'react'

import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

const Touchable:React.FC <TouchableOpacityProps>= ( props) => {
  return <TouchableOpacity activeOpacity={0.8} {...props} />
}
export default Touchable 
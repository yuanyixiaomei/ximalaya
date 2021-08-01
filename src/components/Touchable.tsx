/*
 * @Author: your name
 * @Date: 2021-07-27 18:56:00
 * @LastEditTime: 2021-07-31 10:12:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\components\Touchable.tsx
 */

import React from 'react'

import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

const Touchable:React.FC <TouchableOpacityProps>=React.memo(( props) => {
  return <TouchableOpacity activeOpacity={0.8} {...props} />
}) 
export default Touchable 
/*
 * @Author: your name
 * @Date: 2021-06-06 21:14:23
 * @LastEditTime: 2021-07-24 16:12:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AwesomeTSProject\src\utils\index.tsx
 */

import {
    Dimensions
} from 'react-native'

const { width: viewportWith, height: viewportheight } = Dimensions.get('window')

function wp(percentage:number) {
    const value = percentage * viewportWith / 100
    return Math.round(value)
}

function hp(percentage:number) {
    const value = percentage * viewportheight / 100
    return Math.round(value)
}
export { viewportWith, viewportheight,wp,hp }
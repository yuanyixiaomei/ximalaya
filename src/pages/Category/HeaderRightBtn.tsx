/*
 * @Author: your name
 * @Date: 2021-08-31 14:12:28
 * @LastEditTime: 2021-08-31 14:41:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Category\HeaderRightBtn.tsx
 */
// props.navigation.setParams({
//     title:'编辑'
// })


import React from 'react'
import { MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { View, StyleSheet, Text } from 'react-native';
import { RootState } from '@/models/index'
import { connect, ConnectedProps } from 'react-redux'
import { ICategory } from '@/models/category.ts'
import { viewportWith } from '@/utils/index'
import { RootStackNavigation, RootStackParamList } from '@/navigator/index'
import {HeaderButtons ,Item} from 'react-navigation-header-buttons'

const mapStateToProps = ({ category }:RootState)=>{
    return {
        isEdit:category.isEdit
    }
    

}

const connector=connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>


interface IProps extends ModelState{
    onSubmit:()=>void
}
class HeaderRightBtn extends React.Component<IProps>{

    render() {
        const {onSubmit,isEdit}=this.props
        return (<HeaderButtons>
            <Item title={ isEdit?'完成':'编辑' }onPress={onSubmit }/>
            

        </HeaderButtons>)
    }

}
export default connector(HeaderRightBtn) 
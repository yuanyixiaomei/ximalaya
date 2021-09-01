/*
 * @Author: your name
 * @Date: 2021-08-31 21:28:57
 * @LastEditTime: 2021-09-01 21:16:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Category\Item.tsx
 */

import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { RootState } from '@/models/index'
import { connect, ConnectedProps } from 'react-redux'
import { viewportWith } from '@/utils/index'
import {ICategory} from '@/models/category'

const mapStateToProps = ({ category }:RootState)=>{
    return {
        isEdit:category.isEdit
    }
    

}

const connector=connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>


interface IProps extends ModelState{
    isEdit: boolean;
    selected: boolean;
    data: ICategory;
}

const parentWidth = viewportWith - 10;
const itemWidth=parentWidth/4
class Item extends React.Component<IProps>{

    render() {
        const {data,isEdit}=this.props
        return (   <View style={styles.itemWrapper} key={data.id}>
            <View style={styles.item}>
            <Text>
                {data.name}
            </Text>

            </View>
        
        </View>)
    }

}
const styles = StyleSheet.create({
    itemWrapper: { width: itemWidth, height: 48 },
    item: {
        flex: 1, margin: 5, backgroundColor: '#fff',
        justifyContent: 'center', alignItems: 'center', borderRadius: 4
    }
        
    
    
})
export default connector(Item) 
/*
 * @Author: your name
 * @Date: 2021-08-31 21:28:57
 * @LastEditTime: 2021-09-30 10:58:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Category\Item.tsx
 */

import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { RootState } from '@/models/index'
import { connect, ConnectedProps } from 'react-redux'
import { viewportWith } from '@/utils/index'
import { ICategory } from '@/models/category'

interface IProps {
    isEdit: boolean;
    disabled: boolean;
    selected: boolean;
    data: ICategory;
}

export const parentWidth = viewportWith - 10;
export const itemWidth = parentWidth / 4
export const itemHeight = 48

class Item extends React.Component<IProps>{
    render() {
        const { data, isEdit, selected, disabled } = this.props
        return (
            <View style={styles.itemWrapper}>
                <View style={styles.item}>
                    <Text>
                        {data.name}
                    </Text>
                    {
                        isEdit && !disabled &&
                        < View style={styles.icon}>
                            <Text style={styles.iconText}>
                                {selected ? '—' : '+'}
                            </Text>
                        </View>
                    }
                </View>
            </View >)
    }
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: -5,
        right: -5,
        height: 16,
        width: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f86442',
        borderRadius: 8,
    },
    iconText: {
        color: '#fff',
        lineHeight: 16,
    },


    itemWrapper: { width: itemWidth, height: 48 },
    item: {
        flex: 1, margin: 5, backgroundColor: '#fff',
        justifyContent: 'center', alignItems: 'center', borderRadius: 4
    }



})
export default Item
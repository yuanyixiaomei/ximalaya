/*
 * @Author: your name
 * @Date: 2021-08-25 20:41:08
 * @LastEditTime: 2021-09-01 21:34:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Category\index.tsx
 */
import React from 'react'
import { MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { RootState } from '@/models/index'
import { connect, ConnectedProps } from 'react-redux'
import { ICategory } from '@/models/category.ts'
import { viewportWith } from '@/utils/index'
import { RootStackNavigation, RootStackParamList } from '@/navigator/index'
import HeaderRightBtn from './HeaderRightBtn'
import Item from './Item'
import _ from 'lodash'



const mapStateToProps = ({ category }: RootState) => {
    return {
        myCategorys: category.myCategorys,
        categorys: category.categorys,
    }
}


const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>
interface IProps extends ModelState {
    navigation: RootStackNavigation
}
interface IState {
    myCategorys: ICategory[]

}
const parentWidth = viewportWith - 10;
const itemWidth = parentWidth / 4

class Category extends React.Component<IProps, IState>{
    state = {
        myCategorys: this.props.myCategorys
    }
    constructor(props: IProps) {
        super(props)
        props.navigation.setOptions({
            headerRight: () => {
                return <HeaderRightBtn onSubmit={this.onSubmit} />
            }

        })

    }

    onSubmit = () => {
        const { dispatch } = this.props
        dispatch({
            type: 'category/toggle'
        })
    }

    renderItem = (item: ICategory, index: number) => {
        return (
            <Item data={item} selected={true} />

        )


    }
    render() {
        const { categorys } = this.props;
        const { myCategorys } = this.state
        const classfyGroup = _.groupBy(categorys, (item) => item.classify)
        console.log(categorys,classfyGroup)
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.classifyName}>
                    我的分类
                </Text>
                <View style={styles.classifyView}>
                    {myCategorys.map(this.renderItem)}
                </View>
                <View>
                    {Object.keys(classfyGroup).map(classify => {
                        return (
                            <View key={classify}>
                                <Text style={styles.classifyName}>
                                    {classify}
                                 </Text>
                                <View style={styles.classifyView}>
                                    {classfyGroup[classify].map(this.renderItem)}
                                </View>
                            </View>


                        )

                    })}

                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f6f6',

        paddingHorizontal: 5,

    },
    classifyName: {
        marginLeft: 10,
        fontSize: 16,
        marginTop: 14,
        marginBottom: 8,
    },
    classifyView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // padding:5
    }



})
export default connector(Category) 
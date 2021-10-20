/*
 * @Author: your name
 * @Date: 2021-08-25 20:41:08
 * @LastEditTime: 2021-09-30 13:35:28
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
import {DragSortableView} from 'react-native-drag-sort'
import { RootStackNavigation, RootStackParamList } from '@/navigator/index'
import HeaderRightBtn from './HeaderRightBtn'
import Item, { parentWidth, itemWidth, itemHeight } from './Item'
import _ from 'lodash'
import Touchable from '@/components/Touchable'

const mapStateToProps = ({ category }: RootState) => {
    return {
        myCategorys: category.myCategorys,
        categorys: category.categorys,
        isEdit: category.isEdit
    }
}

const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>

interface IProps extends ModelState {
    navigation: RootStackNavigation,
    isEdit: boolean;
}

interface IState {
    myCategorys: ICategory[]

}

const fixedItems = [0, 1]

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
    componentWillUnmount() {
        const { dispatch } = this.props
        dispatch({
            type: 'category/setState',
            payload: {
                isEdit: false,
            }
        })

    }

    onSubmit = () => {
        const { dispatch } = this.props
        const { myCategorys } = this.state
        dispatch({
            type: 'category/toggle',
            payload: {myCategorys,}
        })
    }
    onLongPress = () => {

        const { dispatch } = this.props
        dispatch({
            type: 'category/setState',
            payload: {
                isEdit: true,
            }
        })

    }

    onPress = (item: ICategory, index: number, selected: boolean,) => {
        const { isEdit } = this.props
        const { myCategorys } = this.state

        const disabled = fixedItems.indexOf(index) > -1
        if (disabled) {
            return
        }
        if (isEdit) {
            if (selected) {
                console.log(myCategorys.filter(selectedItem => selectedItem.id !== item.id), '44')
                this.setState({
                    myCategorys: myCategorys.filter(selectedItem => selectedItem.id !== item.id)
                })

            } else {
                this.setState({
                    myCategorys: myCategorys.concat([item])
                })
            }
        }
    }

    onDataChange = (data: ICategory[]) => {
        this.setState({
            myCategorys:data
        })
    
    }

    renderItem = (item: ICategory, index: number) => {
        const { isEdit } = this.props
        const disabled=fixedItems.indexOf(index)>-1
        return (
            <Touchable key={item.id} onPress={() => this.onPress(item, index, true)}>
                <Item disabled={disabled} key={item.id} data={item} selected={true} isEdit={isEdit} />
            </Touchable>
        )
    }

    renderUnSelectedItem = (item: ICategory, index: number) => {
        const { isEdit } = this.props
        return (
            <Touchable key={item.id} onPress={() => this.onPress(item, index, false)}>
                <Item  disabled={false}  key={item.id} data={item} selected={false} isEdit={isEdit} />
            </Touchable>

        )

    }
    render() {
        const { categorys,isEdit } = this.props;
        const { myCategorys } = this.state
        const classfyGroup = _.groupBy(categorys, (item) => item.classify)
        console.log(myCategorys, categorys, classfyGroup, '2222')
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.classifyName}>
                    我的分类
                </Text>
                <View style={styles.classifyView}>
                    <DragSortableView
                        parentWidth={parentWidth}
                        childrenWidth={itemWidth}
                        childrenHeight={itemHeight}
                        dataSource={myCategorys}
                        renderItem={this.renderItem}
                        sortable={isEdit}
                        keyExtractor={item => item.id}
                        onDataChange={this.onDataChange}
                    
                    />

                

                    {/* {myCategorys.map( this.renderItem)} */}
                </View>
                <View>
                    {Object.keys(classfyGroup).map(classify => {
                        return (
                            <View key={classify}>
                                <Text style={styles.classifyName}>
                                    {classify}
                                </Text>
                                <View style={styles.classifyView}>
                                    {classfyGroup[classify].map(
                                        (item, index) => {
                                            if (myCategorys.find(selectedItem => selectedItem.id === item.id)) {
                                                return null
                                            }
                                            return this.renderUnSelectedItem(item, index)



                                        }



                                    )}
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
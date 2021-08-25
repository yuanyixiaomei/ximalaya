/*
 * @Author: your name
 * @Date: 2021-08-25 20:41:08
 * @LastEditTime: 2021-08-25 22:19:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\pages\Category\index.tsx
 */
import React from 'react'
import { MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { View, StyleSheet, Text } from 'react-native';
import { RootState } from '@/models/index'
import { connect, ConnectedProps } from 'react-redux'
import { ICategory } from '@/models/category.ts'
import {viewportWith} from '@/utils/index'


const mapStateToProps = ({ category }: RootState) => {
    return {
        myCategorys: category.myCategorys,
        categorys: category.categorys,
    }
}


const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>
interface IProps extends ModelState { }
interface IState {
    myCategorys: ICategory[]
}
const parentWidth = viewportWith - 10;
const itemWidth=parentWidth/4

class Category extends React.Component<IProps, IState>{
    state = {
        myCategorys: this.props.myCategorys
    }

    renderItem = (item: ICategory, index: number) => {
        return (
            <View style={{ width: itemWidth, height: 40,  }} key={item.id}>
                <View style={{ flex:1,margin:5, height: 40, backgroundColor: '#fff',justifyContent: 'center',alignItems:'center'}}>
                <Text>
                    {item.name}
                </Text>

                </View>
            
            </View>
        )


    }
    render() {
        const { categorys } = this.props;
        const { myCategorys } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.classifyName}>
                    我的分类
                </Text>
                <View style={styles.classifyView}>
                    {myCategorys.map(this.renderItem)}
                </View>
                <View>
                    <Text style={styles.classifyName}>
                        所有分类
                    </Text>
                    <View style={styles.classifyView}>
                        {categorys.map(this.renderItem)}
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f3f6f6'
    },
    classifyName: {
     
        fontSize: 16,
        marginTop: 14,
        marginBottom: 8,
    },
    classifyView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding:5
    }

  
  
  })
export default connector(Category) 
/*
 * @Author: your name
 * @Date: 2021-07-21 21:24:17
 * @LastEditTime: 2021-07-28 22:19:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\models\home.ts
 */

import { Model,Effect } from "dva-core-ts"
import { Reducer } from "redux"
import axios from 'axios';

//轮播图
const CAROUSEL_URL = '/mock/709/carousel'

//猜你喜欢
const GUESS_URL = '/mock/709/guress'

//首页列表
const CHANNEL_URL = '/mock/709/channel'

export interface IChannel{
    id: string;
    title: string;
    image: string;
    remark: string;
    played: string;
    playing: string;
}

export interface IGuess{
    id: string;
    title: string;
    image: string;
}

export interface ICarousel{
    id: string;
    image: string;
    colors:[string,string ]
}

 export interface HomeState {
     carousels: ICarousel[];
     guess: IGuess[];
     channels: IChannel[];
}
interface HomeModel extends Model {
    namespace: 'home';
    state: HomeState;
    reducers: {
        setState: Reducer<HomeState>
    }
    effects: {
        fetchCarousels: Effect,
        fetchGuess: Effect,
        fetchChannels:Effect
    
    };

}

const initialState = {
    carousels: [],
    guess: [],
    channels:[],


}

const homemodel: HomeModel = {
    namespace: 'home',
    state: initialState,
    reducers: {
        setState(state=initialState, {type, payload }) {
            return {
                ...state,...payload
            }
        }

    },
    effects: {
        *fetchCarousels(_, { call, put }) {
            const {data} = yield call(axios.get,CAROUSEL_URL )
            console.log('轮播图数据',data)
            yield put({
                type: 'setState', payload: {
                    carousels:data
                }
            })
        },

        *fetchGuess(_, { call, put }) {
            const {data} = yield call(axios.get,GUESS_URL )
            console.log('猜你喜欢',data)
            yield put({
                type: 'setState', payload: {
                    guess:data
                }
            })
        },

        *fetchChannels(_, { call, put }) {
            const {data} = yield call(axios.get,CHANNEL_URL )
            console.log('渠道',data)
            yield put({
                type: 'setState', payload: {
                    channels:data.results
                }
            })
        }


    }


}

export default homemodel
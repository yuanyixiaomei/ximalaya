/*
 * @Author: your name
 * @Date: 2021-07-21 21:24:17
 * @LastEditTime: 2021-07-31 15:48:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\models\home.ts
 */

import { Model,Effect } from "dva-core-ts"
import { Reducer } from "redux"
import axios from 'axios';
import { RootState } from ".";

//轮播图
const CAROUSEL_URL = '/mock/709/carousel'

//猜你喜欢
const GUESS_URL = '/mock/709/guress'

//首页列表
const CHANNEL_URL = '/mock/709/channel'

export interface IPagination{
    current: number,
    total: number,
    hasMore:boolean
}

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
     pagination:IPagination
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
    channels: [],
    pagination: {
        current: 1,
        total: 0,
        hasMore:true
    }


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

        *fetchChannels({ callback, payload }, { call, put, select }) {
            const { channels, pagination } = yield select((state: RootState) => state.home)

            let page=1
            if (payload && payload.loadMore) {
                page=pagination.current+1
            }

            const { data } = yield call(axios.get, CHANNEL_URL, {
                params: {
                page,
            }})
            console.log('渠道', data)

            let newChannels=data.results
            if (payload && payload.loadMore) {
                newChannels=channels.concat(newChannels)
            }

            // let pagination=data.pagination
            yield put({
                type: 'setState', payload: {
                    channels: newChannels,
                    pagination: {
                        current:data.pagination.current,
                        total:data.pagination.total,
                        hasMore:newChannels.length<data.pagination.total
                    }
                }
            })
            if (typeof callback === 'function') {
                callback()
            }
        }


    }


}

export default homemodel
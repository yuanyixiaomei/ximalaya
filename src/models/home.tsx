/*
 * @Author: your name
 * @Date: 2021-07-21 21:24:17
 * @LastEditTime: 2021-07-22 19:04:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\models\home.ts
 */

import { Model,Effect } from "dva-core-ts"
import { Reducer } from "redux"
 export interface HomeState {
    num: Number
}
interface HomeModel extends Model {
    namespace: 'home';
    state: HomeState;
    reducers: {
        add: Reducer<HomeState>
    }
    effects: { asyncAdd: Effect };

}

const initialState = {
    num: 0
}
function delay(timeout:Number) {
    return new Promise(resolve => {
        setTimeout(resolve,timeout)
    })
}

const homemodel: HomeModel = {
    namespace: 'home',
    state: { num: 0 },
    reducers: {
        add(state=initialState, {type, payload }) {
            return {
                ...state, num: state.num + payload.num
            }
        }

    },
    effects: {
        *asyncAdd({ payload }, { call, put }) {
            yield call(delay, 3000)
            yield put({
                type:'add',payload
            })
        
    } }


}

export default homemodel
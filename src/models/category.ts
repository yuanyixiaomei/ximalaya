/*
 * @Author: your name
 * @Date: 2021-08-23 21:05:13
 * @LastEditTime: 2021-08-25 21:34:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\models\category.ts
 */

import {
  Model,
  Effect,
  Subscription,
  SubscriptionsMapObject,
} from "dva-core-ts";
import { Reducer } from "redux";
import storage, { load } from "@/config/storage";
import axios from "axios";

const CATEGORY_URL='/mock/709/category'

 export interface ICategory {
  id: string;
  name: string;
  classify?: string;
}

interface CategoryModelState {
  myCategorys: ICategory[];
  categorys: ICategory[];
}
interface CategoryModel extends Model {
  namespace: "category";
  state: CategoryModelState;
  effects: {
    loadData: Effect;
  };
  reducers: {
    setState: Reducer<CategoryModelState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState = {
  myCategorys: [
    {
      id: "home",
      name: "推荐",
    },
    {
      id: "vip",
      name: "vip",
    },
  ],
  categorys: [],
};

const categoryModel: CategoryModel = {
  namespace: "category",
  state: initialState,
  effects: {
    *loadData(_, { call, put }) {
      const myCategorys = yield call(load, { key: "myCategorys" });
      const categorys = yield call(load, { key: "categorys" });

      if (myCategorys) {
        yield put({
          type: "setState",
          payload: {
            myCategorys,
            categorys,
          },
        });
      } else {
        yield put({
          type: "setState",
          payload: {
            categorys,
          },
        });
      }
    },
  },
  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: "loadData" });
    },
    asyncStorage() {
      storage.sync.categorys = async () => {
        const {data} = await axios.get(CATEGORY_URL)
        return data
      };
      storage.sync.myCategorys = async () => {
        return null
      }
    },
  },
};

export default categoryModel;

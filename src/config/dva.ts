/*
 * @Author: your name
 * @Date: 2021-07-21 21:20:45
 * @LastEditTime: 2021-07-22 19:11:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\config\dva.ts
 */

import { create } from 'dva-core-ts'
import createLoading from 'dva-loading-ts'
import models from "@/models/index"
const app = create()


models.forEach(model => {
  app.model(model)
  
});
app.use(createLoading())

app.start()
export default app._store
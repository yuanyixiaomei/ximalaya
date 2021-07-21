/*
 * @Author: your name
 * @Date: 2021-07-21 20:29:30
 * @LastEditTime: 2021-07-21 20:47:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\App.js
 */
//import logo from "./logo.svg";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
        {/* <HooksCakeContainer></HooksCakeContainer> */}
        {/* <IceCreamContainer></IceCreamContainer> */}
        {/* <NewCakeContainer></NewCakeContainer> */}
        {/* <ItemContainer cake></ItemContainer> */}
        {/* <UserContainer></UserContainer> */}
      </div>
    </Provider>
  );
}

export default App;

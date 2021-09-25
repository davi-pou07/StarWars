import React from 'react';
import Navigator from "./src/navigation/Navigator";
import store from "./src/store/store";
import {Provider} from "react-redux";

function App() {
  return (<Provider store={store}><Navigator /></Provider>);
}

export default App;
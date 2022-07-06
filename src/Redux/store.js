import { configureStore } from "redux-inject-reducer-and-saga";

const store = configureStore();
global.store = store;
export default store;
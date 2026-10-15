import { legacy_createStore } from "redux"
import { appReducer } from "./CounterRedux"

const store = legacy_createStore(appReducer)

export default store;
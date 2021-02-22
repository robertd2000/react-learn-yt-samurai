import { combineReducers, createStore } from "redux";
import { dialogReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { sitebarReducer } from "./sitebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sitebar: sitebarReducer
})

let store = createStore(reducers)

export default store
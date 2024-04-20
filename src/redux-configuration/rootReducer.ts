import { combineReducers } from 'redux';
import { AppState } from "./appState";
import { articleRootReducer } from "../article/config/rootReducer";

export const rootReducer = combineReducers<AppState>({
    article: articleRootReducer
})

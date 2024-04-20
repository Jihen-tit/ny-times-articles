import { combineReducers } from "redux";
import { ArticleState } from "./state";
import { loadArticlesListReducer } from "../usecases/list/reducer";

export const articleRootReducer = combineReducers<ArticleState>({
    list: loadArticlesListReducer
})

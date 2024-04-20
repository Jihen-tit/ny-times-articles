import {
    LOAD_ARTICLES_LIST, LOAD_ARTICLES_LIST_FAILED, LOAD_ARTICLES_LIST_SUCCEEDED,
    LoadArticlesListActionTypes
} from "./actionTypes";
import { LoadArticlesListState } from "../../config/state";

const initialState: LoadArticlesListState = {
    loading: false,
    data   : [],
    error  : 'undefined'
}

export const loadArticlesListReducer = (state = initialState, action: LoadArticlesListActionTypes): LoadArticlesListState => {
    switch (action.type) {
        case LOAD_ARTICLES_LIST:
            return {
                loading: true,
                data   : undefined,
                error  : undefined
            }
        case LOAD_ARTICLES_LIST_FAILED:
            return {
                loading: false,
                data   : undefined,
                error  : action.payload
            }
        case LOAD_ARTICLES_LIST_SUCCEEDED:
            return {
                loading: false,
                data   : action.payload,
                error  : undefined
            }
        default:
            return state
    }
}

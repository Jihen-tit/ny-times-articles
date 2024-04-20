import { Article } from "../../domain/entities/article";

export const LOAD_ARTICLES_LIST = 'LOAD_ARTICLES_LIST'
export const LOAD_ARTICLES_LIST_SUCCEEDED = 'LOAD_ARTICLES_LIST_SUCCEEDED'
export const LOAD_ARTICLES_LIST_FAILED = 'LOAD_ARTICLES_LIST_FAILED'


export interface LoadArticlesListAction {
    type: typeof LOAD_ARTICLES_LIST;
}

export interface LoadArticlesListSucceededAction {
    type: typeof LOAD_ARTICLES_LIST_SUCCEEDED;
    payload: Article[];
}

export interface LoadArticlesListFailedAction {
    type: typeof LOAD_ARTICLES_LIST_FAILED;
    payload: string;
}


export type LoadArticlesListActionTypes =
    LoadArticlesListAction
    | LoadArticlesListSucceededAction
    | LoadArticlesListFailedAction

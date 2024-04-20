import {
    LOAD_ARTICLES_LIST, LOAD_ARTICLES_LIST_FAILED, LOAD_ARTICLES_LIST_SUCCEEDED,
    LoadArticlesListAction, LoadArticlesListFailedAction, LoadArticlesListSucceededAction
} from "./actionTypes";
import { Article } from "../../domain/entities/article";

export const loadArticlesList = (): LoadArticlesListAction => ({
    type: LOAD_ARTICLES_LIST
})

export const loadArticlesListSucceeded = (articles: Article[]): LoadArticlesListSucceededAction => ({
    type   : LOAD_ARTICLES_LIST_SUCCEEDED,
    payload: articles
})

export const loadArticlesListFailed = (error: string): LoadArticlesListFailedAction => ({
    type   : LOAD_ARTICLES_LIST_FAILED,
    payload: error
})

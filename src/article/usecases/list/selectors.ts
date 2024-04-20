import { AppState } from "../../../redux-configuration/appState";
import { Article } from "../../domain/entities/article";

export const loadArticlesListLoadingSelector = (state: AppState): boolean => state.article.list.loading
export const loadArticlesListErrorSelector = (state: AppState): string | undefined => state.article.list.error
export const articlesListSelector = (state: AppState): Article[] | undefined => state.article.list.data

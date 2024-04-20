import { Article } from "../domain/entities/article";

export interface ArticleState {
    list: LoadArticlesListState;
}

export interface LoadArticlesListState {
    loading: boolean;
    data: Article[] | undefined;
    error: string | undefined;
}

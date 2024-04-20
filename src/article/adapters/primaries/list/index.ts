import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ArticlesContainer } from "./articles.container";
import { Article } from "../../../domain/entities/article";
import { articlesListSelector, loadArticlesListErrorSelector, loadArticlesListLoadingSelector } from "../../../usecases/list/selectors";
import { LoadArticlesListAction } from "../../../usecases/list/actionTypes";
import { loadArticlesList } from "../../../usecases/list/actions";
import { AppState } from "../../../../redux-configuration/appState";

interface StateToPropsType {
    loading: boolean;
    articles: Article[] | undefined;
    error: string | undefined;
}

interface DispatchToPropsType {
    loadArticles: () => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
    loading : loadArticlesListLoadingSelector(state),
    articles: articlesListSelector(state),
    error   : loadArticlesListErrorSelector(state)
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
    loadArticles: (): LoadArticlesListAction => dispatch(loadArticlesList())
})

export const ArticlesPage = connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)

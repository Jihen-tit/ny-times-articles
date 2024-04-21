import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../redux-configuration/appState";
import { articlesListSelector, loadArticlesListErrorSelector, loadArticlesListLoadingSelector } from "../../../usecases/list/selectors";
import { loadArticlesList } from "../../../usecases/list/actions";
import { LoadingPresentational } from "../components/loading.presentational";
import { Article } from "../../../domain/entities/article";
import { useParams } from "react-router-dom";
import { ArticleDetailsPresentational } from "./components/articleDetails.presentational";

export const ArticleDetails = () => {

    const params = useParams()

    const loading = useSelector((state: AppState) => loadArticlesListLoadingSelector(state))
    const error = useSelector((state: AppState) => loadArticlesListErrorSelector(state))
    const articles = useSelector((state: AppState) => articlesListSelector(state))

    const [selectedArticle, setSelectedArticle] = useState<Article | undefined>(undefined)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadArticlesList())
    }, [])

    useEffect(() => {
        if (articles) {
            const articleFound = articles.find(item => item.id === params.id)
            if (articleFound) {
                setSelectedArticle(articleFound)
            }
        }
    }, [articles])

    return (
        <section className={'article-details'}>
            <div className={"container"}>
                {loading && <LoadingPresentational/>}

                {error && <p data-testid={"error"}>Article Not Found</p> }

                {selectedArticle && <ArticleDetailsPresentational article={selectedArticle}/> }
            </div>
        </section>
    )


}

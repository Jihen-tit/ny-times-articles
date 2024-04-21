import React, { PureComponent } from "react";
import { Article } from "../../../domain/entities/article";
import { ArticlePresentational } from "./components/article.presentational";
import { LoadingPresentational } from "../components/loading.presentational";

interface Props {
    loading: boolean;
    articles: Article[] | undefined;
    error: string | undefined;
    loadArticles: () => void;
}

export class ArticlesContainer extends PureComponent<Props> {

    componentDidMount() {
        this.props.loadArticles()
    }

    render() {
        return (
            <section className={'articles-page'}>
                <div className={"container"}>
                    <h1 data-testid="listing-title">NY Times Popular articles</h1>

                    {this.props.loading && <LoadingPresentational/>}

                    <div className={"row"}>
                        {this.props.articles?.map(item => <ArticlePresentational key={item.id} article={item} />)}
                    </div>
                </div>
            </section>
        )
    }
}

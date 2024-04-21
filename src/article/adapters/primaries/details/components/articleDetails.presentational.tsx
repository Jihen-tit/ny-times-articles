import { Article } from "../../../../domain/entities/article";
import React from "react";

export const ArticleDetailsPresentational = (props: { article: Article }) => {
    return (
        <div className={"container"} data-testid={"article-details"}>
            <div className={"row"}>
                <div className={"col-6"}>
                    <h1 data-testid={"article-title"}>{props.article.title}</h1>
                    <p className="card-text" data-testid={"article-description"}>{props.article.description}</p>
                </div>

                <div className={"col-6"}>
                    {props.article.images &&
                        <img className="card-img-top" src={props.article.images[2]} alt={props.article.title} data-testid={"article-image"}/>}
                </div>
            </div>
        </div>
    )
}

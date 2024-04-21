import { Article } from "../../../../domain/entities/article";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ArticlePresentational = (props: { article: Article }) => {
    const navigate = useNavigate()

    return (
        <div className={"col-6 col-md-4 col-3 mb-4"} data-testid={"article"}>
            <div className="card h-100">
                {props.article.images ?
                    <img className="card-img-top" src={props.article.images[1]} alt={props.article.title} data-testid={"article-image"}/> :
                    <div className={"card-img-top"}/>}

                <div className="card-body h-100 d-flex flex-column justify-content-between align-items-start">
                    <div>
                        <b className="card-title" data-testid={"article-title"}>{props.article.title}</b>
                        <p className="card-text" data-testid={"article-description"}>{props.article.description}</p>
                    </div>

                    <button className={'btn'}
                            id={props.article.id}
                            data-testid="article-button"
                            onClick={() => navigate("/article/" + props.article.id)}>Read this article
                    </button>
                </div>
            </div>
        </div>
    )
}

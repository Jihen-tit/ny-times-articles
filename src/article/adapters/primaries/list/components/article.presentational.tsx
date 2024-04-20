import { Article } from "../../../../domain/entities/article";
import React from "react";

export const ArticlePresentational = (props: {article: Article}) => {
    return (
        <div className={"col-3"} data-testid={"article"}>
            <div className="card">
                {props.article.images && <img className="card-img-top" src={props.article.images[0]} alt="Card image cap" data-testid={"product-image"}/>}
                <div className="card-body">
                    <b className="card-title" data-testid={"product-title"}>{props.article.title}</b>
                    <p className="card-text" data-testid={"product-description"}>Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <a href={"/article/" + props.article.id} className="btn">Read this article</a>
                </div>
            </div>
        </div>
    )
}

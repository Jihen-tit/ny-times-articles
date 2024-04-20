import { Article } from "../../../../domain/entities/article";
import React from "react";

export const ArticlePresentational = (props: {article: Article}) => {
    return (
        <div className={"col-3"}>
            <div className="card">
                {props.article.images && <img className="card-img-top" src={props.article.images[0]} alt="Card image cap"/>}
                <div className="card-body">
                    <b className="card-title">{props.article.title}</b>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <a href={"/article/" + props.article.id} className="btn">Read this article</a>
                </div>
            </div>
        </div>
    )
}

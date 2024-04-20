import { Article } from "./article";

export class ArticleBuilder {

    private _id!: string;
    private _title!: string;
    private _description!: string;
    private _images!: string[];

    withId(value: string): ArticleBuilder {
        this._id = value
        return this
    }

    withTitle(value: string): ArticleBuilder {
        this._title = value
        return this
    }

    withDescription(value: string): ArticleBuilder {
        this._description = value
        return this
    }

    withImages(value: string[]): ArticleBuilder {
        this._images = value
        return this
    }

    build(): Article {
        return new Article(
            this._id,
            this._title,
            this._description,
            this._images
        )
    }
}

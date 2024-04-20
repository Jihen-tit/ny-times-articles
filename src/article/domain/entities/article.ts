export class Article {

    constructor(
        private _id: string,
        private _title: string,
        private _description: string,
        private _images: string[]
    ) {
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get images(): string[] {
        return this._images;
    }
}

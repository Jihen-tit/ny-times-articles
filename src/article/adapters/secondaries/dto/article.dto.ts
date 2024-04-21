export interface ArticleDTO {
    id: number;
    title: string;
    abstract: string;
    media: ArticleMediaDTO[]
}
export interface ArticleMediaDTO {
    "media-metadata": ArticleImageDTO[]
}
export interface ArticleImageDTO {
    url: string
}

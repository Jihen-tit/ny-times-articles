export interface ArticleDTO {
    id: string;
    title: string;
    abstract: string;
    media: ArticleImagesDTO[]
}
export interface ArticleImagesDTO {
    "media-metadata": ArticleImageDTO[]
}
export interface ArticleImageDTO {
    url: string
}

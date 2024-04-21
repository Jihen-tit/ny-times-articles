import { ArticleDTO } from "../dto/article.dto";
import { Article } from "../../../domain/entities/article";
import { ArticleBuilder } from "../../../domain/entities/article.builder";

export class ArticleMapper {

    static mapDataToArticlesList(articles: ArticleDTO[]): Article[] {
        return articles.map(item => {
            const articleBuilder = new ArticleBuilder()
                .withId(item.id.toString())
                .withTitle(item.title)
                .withDescription(item.abstract)

            if (item.media && item.media.length > 0) {
                articleBuilder.withImages(item.media?.[0]["media-metadata"].map(img => img.url) ?? [])
            }
            return articleBuilder.build()
        })
    }

}

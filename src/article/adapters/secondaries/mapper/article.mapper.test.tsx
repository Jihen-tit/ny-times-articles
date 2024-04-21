import { ArticleDTO } from "../dto/article.dto";
import { ArticleMapper } from "./article.mapper";
import { ArticleBuilder } from "../../../domain/entities/article.builder";

describe('Articles Mapper Test', () => {
    it('should map api articles', () => {
        const articles: ArticleDTO[] = [
            {
                id      : 1002,
                title   : 'Article Title',
                abstract: 'Description',
                media   : [{
                    "media-metadata": [
                        {url: 'https//:image.png'}
                    ]
                }]
            },
            {
                id      : 1003,
                title   : 'Article 2 Title',
                abstract: 'Description 2',
                media   : []
            }
        ]
        const apiArticle = ArticleMapper.mapDataToArticlesList(articles)
        const expectedArticle = [
            new ArticleBuilder()
                .withId('1002')
                .withTitle('Article Title')
                .withDescription('Description')
                .withImages(['https//:image.png'])
                .build(),
            new ArticleBuilder()
                .withId('1003')
                .withTitle('Article 2 Title')
                .withDescription('Description 2')
                .build()
        ]

        expect(expectedArticle).toEqual(apiArticle)
    });
})

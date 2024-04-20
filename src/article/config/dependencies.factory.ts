import { ArticleService } from "../domain/gateway/article.service";
import { ApiArticleService } from "../adapters/secondaries/apiArticle.service";

export class ArticleDependenciesFactory {
    static getArticleService(): ArticleService {
        return new ApiArticleService()
    }
}

import { ArticleDependenciesFactory } from "./dependencies.factory";

export const articleEpicDependencies = {
    articleService: ArticleDependenciesFactory.getArticleService()
}

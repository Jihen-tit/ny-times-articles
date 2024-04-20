import { Observable, throwError } from "rxjs";
import { Article } from "../../domain/entities/article";
import { ArticleService } from "../../domain/gateway/article.service";
import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";
import { ArticleMapper } from "./mapper/article.mapper";
import { ArticleDTO } from "./dto/article.dto";

export class ApiArticleService implements ArticleService {

    getArticles(): Observable<Article[]> {
        const url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=coWYLrEyvoB23BAi23z4FTGELdzLvnHQ"
        return ajax.getJSON<{ results: ArticleDTO[] }>(url).pipe(
            map((response: { results: ArticleDTO[] }) => {
                console.log(response)
                return ArticleMapper.mapDataToArticlesList(response.results)
            }),
            catchError(err => throwError(err.status.toString()))
        )
    }

}

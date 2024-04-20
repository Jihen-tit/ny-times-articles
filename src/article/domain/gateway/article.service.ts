import { Observable } from "rxjs";
import { Article } from "../entities/article";

export interface ArticleService {

    getArticles(): Observable<Article[]>;

}

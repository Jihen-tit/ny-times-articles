import { Epic, ofType, StateObservable } from 'redux-observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from "rxjs";
import { LOAD_ARTICLES_LIST, LoadArticlesListAction } from "./actionTypes";
import { AppState } from "../../../redux-configuration/appState";
import { loadArticlesListFailed, loadArticlesListSucceeded } from "./actions";
import { ArticleService } from "../../domain/gateway/article.service";


export const loadArticlesListEpic: Epic = (action$: Observable<LoadArticlesListAction>,
                                           store: StateObservable<AppState>,
                                           {articleService}: {
                                               articleService: ArticleService
                                           }) =>
    action$.pipe(
        ofType(LOAD_ARTICLES_LIST),
        switchMap(() => articleService.getArticles()
            .pipe(
                map(articles => loadArticlesListSucceeded(articles)),
                catchError(error => of(loadArticlesListFailed(error)))
            )
        )
    )

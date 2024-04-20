import { combineEpics, Epic } from "redux-observable";
import { loadArticlesListEpic } from "../usecases/list/epic";

export const articleRootEpic: Epic =  combineEpics(loadArticlesListEpic)

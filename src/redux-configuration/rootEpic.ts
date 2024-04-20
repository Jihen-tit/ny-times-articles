import { combineEpics, createEpicMiddleware } from "redux-observable";
import { articleRootEpic } from "../article/config/rootEpic";
import { articleEpicDependencies } from "../article/config/epic.dependencies";

export const rootEpic = combineEpics(articleRootEpic)

export const epicMiddleware = createEpicMiddleware({
    dependencies: {
        ...articleEpicDependencies
    }
})

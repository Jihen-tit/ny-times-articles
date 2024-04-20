import { combineEpics, createEpicMiddleware } from "redux-observable";

export const rootEpic = combineEpics()

export const epicMiddleware = createEpicMiddleware({
    dependencies: {}
})

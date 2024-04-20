import { AppState } from './appState';
import { epicMiddleware, rootEpic } from './rootEpic';
import { Store } from "redux";
import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const reduxStore = (): Store<AppState> => {

    const options: ConfigureStoreOptions = {
        reducer: rootReducer,
        middleware: [epicMiddleware],
    };

    const store = configureStore(options);

    epicMiddleware.run(rootEpic);

    return store;
};

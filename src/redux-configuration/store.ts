import { AppState } from './appState';
import { epicMiddleware, rootEpic } from './rootEpic';
import { Store } from "redux";
import { configureStore, ConfigureStoreOptions, Tuple } from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger';

const logger = createLogger({
    collapsed: true,
    level    : 'info',
});

export const reduxStore = (): Store<AppState> => {

    const options: ConfigureStoreOptions = {
        reducer: {},
        middleware: () => new Tuple(epicMiddleware, logger),
    };

    const store = configureStore(options);

    epicMiddleware.run(rootEpic);

    return store;
};

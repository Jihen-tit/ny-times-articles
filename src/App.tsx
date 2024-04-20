import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { reduxStore } from "./redux-configuration/store";
import { Provider } from "react-redux";
import { ArticleDetails } from "./article/adapters/primaries/details/article.details";
import { ArticlesPage } from "./article/adapters/primaries/list";

export const store = reduxStore()

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<ArticlesPage/>}/>
                    <Route path="/article/:id" element={<ArticleDetails/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

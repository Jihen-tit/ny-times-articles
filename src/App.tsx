import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticlesContainer } from "./pages/articles.container";
import { reduxStore } from "./redux-configuration/store";
import { Provider } from "react-redux";
import { ArticleDetails } from "./pages/article.details";

export const store = reduxStore()

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<ArticlesContainer/>}/>
                    <Route path="/article/:id" element={<ArticleDetails/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

import React from 'react';
import { render, screen } from "@testing-library/react";
import { ArticleDetails } from "./article.details";
import { Provider } from "react-redux";
import createMockStore from 'redux-mock-store';
import { ArticleBuilder } from "../../../domain/entities/article.builder";

const mockStore = createMockStore([]);

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => {
        return {id: "article-2"}
    },
}));

describe("Articles container", () => {
    it("should render loading", () => {
        const mockState = {
            article: {
                list: {
                    loading: true,
                    data   : undefined,
                    error  : undefined
                }
            }
        }
        const store = mockStore(mockState);
        render(<ArticleDetails/>, {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
        });
        const title = screen.queryByTestId("article-title");
        const description = screen.queryByTestId("article-description");
        const image = screen.queryByTestId("article-image");
        const loading = screen.queryByTestId("loading");
        const error = screen.queryByTestId("error");
        expect(title).toBeNull();
        expect(description).toBeNull();
        expect(image).toBeNull();
        expect(loading).toBeInTheDocument();
        expect(error).toBeNull();
    });

    it("should render error", () => {
        const mockState = {
            article: {
                list: {
                    loading: false,
                    data   : undefined,
                    error  : "Server error"
                }
            }
        }
        const store = mockStore(mockState);

        render(<ArticleDetails/>, {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
        });

        const title = screen.queryByTestId("article-title");
        const description = screen.queryByTestId("article-description");
        const image = screen.queryByTestId("article-image");
        const loading = screen.queryByTestId("loading");
        const error = screen.queryByTestId("error");
        expect(title).toBeNull();
        expect(description).toBeNull();
        expect(image).toBeNull();
        expect(loading).toBeNull();
        expect(error).toBeInTheDocument();
    });


    it("should render article details", () => {
        const mockData = [
            new ArticleBuilder()
                .withId("article-1")
                .withTitle("Article 1 title")
                .withDescription("Article 1 description")
                .build(),
            new ArticleBuilder()
                .withId("article-2")
                .withTitle("Article 2 title")
                .withDescription("Article 2 description")
                .withImages(["https//:image.png"])
                .build()
        ]
        const mockState = {
            article: {
                list: {
                    loading: false,
                    data   : mockData,
                    error  : undefined
                }
            }
        }

        const store = mockStore(mockState);
        render(<ArticleDetails/>, {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
        });
        const title = screen.queryByTestId("article-title");
        const description = screen.queryByTestId("article-description");
        const image = screen.queryByTestId("article-image");
        const loading = screen.queryByTestId("loading");
        const error = screen.queryByTestId("error");
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(loading).toBeNull();
        expect(error).toBeNull();
    });
});

import { render, screen } from "@testing-library/react";
import { ArticlesContainer } from "./articles.container";
import { ArticleBuilder } from "../../../domain/entities/article.builder";

describe("Articles container", () => {
    it("should render only the header", () => {
        render(
            <ArticlesContainer loading={false}
                               error={undefined}
                               articles={undefined}
                               loadArticles={jest.fn()}/>
        );
        const title = screen.getByRole("heading");
        const loading = screen.queryByTestId("loading");
        const articles = screen.queryAllByTestId("article");
        expect(title).toBeInTheDocument();
        expect(loading).toBeNull();
        expect(articles).toEqual([]);
    });

    it("should render header and loading component", () => {
        render(
            <ArticlesContainer loading={true}
                               error={undefined}
                               articles={undefined}
                               loadArticles={jest.fn()}/>
        );
        const title = screen.getByRole("heading");
        const loading = screen.queryByTestId("loading");
        const articles = screen.queryAllByTestId("article");
        expect(title).toBeInTheDocument();
        expect(loading).toBeInTheDocument();
        expect(articles).toEqual([]);
    });


    it("should render header and articles", () => {
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
                .build()
        ]
        render(
            <ArticlesContainer loading={false}
                               error={undefined}
                               articles={mockData}
                               loadArticles={jest.fn()}/>
        );
        const title = screen.getByRole("heading");
        const loading = screen.queryByTestId("loading");
        const articles = screen.queryAllByTestId("article");
        expect(title).toBeInTheDocument();
        expect(loading).toBeNull();
        expect(articles.length).toEqual(2);
    });

    it("should navigate to article details page on clicking on button", () => {
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
                .build()
        ]
        render(
            <ArticlesContainer loading={false}
                               error={undefined}
                               articles={mockData}
                               loadArticles={jest.fn()}/>
        );
        const title = screen.getByRole("heading");
        const loading = screen.queryByTestId("loading");
        const articles = screen.queryAllByTestId("article");
        expect(title).toBeInTheDocument();
        expect(loading).toBeNull();
        expect(articles.length).toEqual(2);
    });
});

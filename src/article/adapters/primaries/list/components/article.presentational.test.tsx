import { render, screen } from "@testing-library/react";
import { ArticlePresentational } from "./article.presentational";
import { ArticleBuilder } from "../../../../domain/entities/article.builder";

describe("Article Details", () => {
    it("should render all article details except image", () => {
        const mockData = new ArticleBuilder()
                .withId("article-1")
                .withTitle("Article 1 title")
                .withDescription("Article 1 description")
                .build()

        render(<ArticlePresentational article={mockData}/>);
        const title = screen.queryByTestId("article-title");
        const description = screen.queryByTestId("article-description");
        const image = screen.queryByTestId("article-image");
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(image).toBeNull();
    });

    it("should render all article details", () => {
        const mockData = new ArticleBuilder()
            .withId("article-1")
            .withTitle("Article 1 title")
            .withDescription("Article 1 description")
            .withImages(["https://imge.png"])
            .build()

        render(<ArticlePresentational article={mockData}/>);
        const title = screen.queryByTestId("article-title");
        const description = screen.queryByTestId("article-description");
        const image = screen.queryByTestId("article-image");
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Read this article' })).toHaveAttribute('href', '/article/article-1')
    });
});

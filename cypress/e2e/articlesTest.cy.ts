describe('articles listing', () => {
    it('renders the default elements on the screen', () => {
        cy.visit('http://127.0.0.1:3000/')

        cy.get('[data-testid="listing-title"]')
            .should("exist")
            .should("have.text", "NY Times Popular articles");
    })

    it('renders the articles on the screen', () => {
        cy.visit('http://127.0.0.1:3000/')

        cy.get('[data-testid="article-button"]')
            .eq(2)
            .click()
            .then(() => {
                cy.url().should('include', '/article/')
                cy.get('[data-testid="article-title"]')
                    .should("exist");
                cy.get('[data-testid="article-description"]')
                    .should("exist");
            })
    })
})

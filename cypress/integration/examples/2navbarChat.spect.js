describe('Buscando navbar en la vista chat room', () => {
    it('encontrando navbar', () => {
        cy.visit('http://localhost:8080/ChatRoom')
        cy.get('[data-cy=navbar]')
        //cy.xpath('//nav[@data-cy="navbar"]')
        .should('exist')
      })
})
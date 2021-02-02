describe('My primera prueba', () => {
    it('encontrando h1 y h2', () => {
        cy.visit('http://localhost:8080')
        cy.xpath('//h1')
        //.wait(5000)
        .should('exist');
      })

      it('encontrando h1 y h2', () => {
        cy.visit('http://localhost:8080/Login')
        cy.xpath('//h3')
        //.wait(5000)
        .should('exist');
      })
})
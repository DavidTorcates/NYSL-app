describe('My primera prueba', () => {
    //H1 en vista logo
    it('encontrando h1', () => {
        cy.visit('http://localhost:8080')
        cy.xpath('//h1')
        .should('exist');
      })
      //H3 en vista login
      it('encontrando h3', () => {
        cy.visit('http://localhost:8080/login')
        cy.xpath('//h3')
        .should('exist');
      })
      //H3 en vista signup
      it('encontrando h3', () => {
        cy.visit('http://localhost:8080/signup')
        cy.xpath('//h3')
        .should('exist');
      })
      // H4 en vista Home
      it('encontrando h4', () => {
        cy.visit('http://localhost:8080/Home')
        cy.xpath('//h4')
        .should('exist');
      })
      // H4 y H3 vista Rules
      it('encontrando h4 y h3', () => {
        cy.visit('http://localhost:8080/Rules')
        cy.xpath('//h4 | //h3')
        .should('exist');
      })
      // H4 en vista About
      it('encontrando h4', () => {
        cy.visit('http://localhost:8080/About')
        cy.xpath('//h4')
        .should('exist');
      })
      //H4 en la vista información de juego
      it('encontrando h4', () => {
        cy.visit('http://localhost:8080/Info')
        cy.xpath('//h4')
        .should('exist');
      })
      //H4 en la vista contacto
      it('encontrando h4', () => {
        cy.visit('http://localhost:8080/Contact')
        cy.xpath('//h4')
        .should('exist');
      })
      //H4 en chat room
      it('encontrando h4', () => {
        cy.visit('http://localhost:8080/ChatRoom')
        cy.xpath('//h4')
        .should('exist');
      })
})
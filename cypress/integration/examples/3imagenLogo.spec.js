describe('Buscando imagen dentro de las vistas', () => {
    //Vista Logo
    it('encontrando imagen', () => {
        cy.visit('http://localhost:8080')//Visite esta pagina
        cy.get('[data-cy=logo]')//Obten las etiquetas que contengan el atributo dentro de los corchetes
        .should('exist')
      })
    //Vista Login
    it('encontrando imagen', () => {
        cy.visit('http://localhost:8080/login')
        //cy.xpath('//div[@id="login"]/a/img[@id="logoinicio"]')
        cy.get('[data-cy=logo]')
        .should('exist')
      })
      //Vista SignUp
    it('encontrando imagen', () => {
        cy.visit('http://localhost:8080/signup')
        cy.get('[data-cy=logo]')
        .should('exist')
      })
       //Vista Home
    it('encontrando imagen', () => {
        cy.visit('http://localhost:8080/Home')
        cy.get('[data-cy=logo]')
        .should('exist')
      })
      //Vista Rules
      it('encontrando imagen', () => {
        cy.visit('http://localhost:8080/Rules')
        cy.get('[data-cy=logo]')
        .should('exist')
      })
      // Vista ABOUT
      it('encontrando imagen', () => {
        cy.visit('http://localhost:8080/About')
        cy.get('[data-cy=logo]')
        .should('exist')
      })
      //Vista Información
      it('encontrando imagen', () => {
        cy.visit('http://localhost:8080/Info')
        cy.get('[data-cy=logo]')
        .should('exist')
      })
      //Vista Contact
      it('encontrando imagen', () => {
        cy.visit('http://localhost:8080/Contact')
        cy.get('[data-cy=logo]')
        .should('exist')
      })
      //Vista ChatRoom
      it('encontrando imagen', () => {
        cy.visit('http://localhost:8080/ChatRoom')
        cy.get('[data-cy=logo]')
        .should('exist')
      })
})
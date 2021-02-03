describe('Buscando imagenes dentro de vistas', () => {
    //Vista Home
    it('encontrando una imagen', () => {
        cy.visit('http://localhost:8080/Home')
        cy.xpath('//img')//buscador
        .should('exist')//condición
      })// Resumido: Visite mi pagina local, busqueme las etiquetas img y verifique si existe
    //Vista About
    it('encontrando mas de dos imagenes', () => {
        cy.visit('http://localhost:8080/About')
        cy.xpath('//img')
        .should('exist')
      })
       //Vista Rules
    it('encontrando una imagen', () => {
        cy.visit('http://localhost:8080/Rules')
        cy.xpath('//img')
        .should('exist')
      })
})
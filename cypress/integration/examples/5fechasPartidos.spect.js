describe('Buscando fechas de partido dentro de Home', () => {
    //Titulo card 1
    it('encontrando fecha', () => {
        cy.visit('http://localhost:8080/Home')
        cy.xpath('//h5[@class="card-header"]')
        .contains('4 Agosto 2021')
      })
    //Titulo card 2
    it('encontrando fecha', () => {
        cy.visit('http://localhost:8080/Home')
        cy.xpath('//h5[@class="card-header"]')
        .contains('16 Agosto 2021')
      })
    //Titulo card 3
    it('encontrando fecha', () => {
        cy.visit('http://localhost:8080/Home')
        cy.xpath('//h5[@class="card-header"]')
        .contains('1 Septiembre 2021')
      })
})
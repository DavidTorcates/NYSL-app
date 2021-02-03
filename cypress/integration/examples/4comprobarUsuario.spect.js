describe('Comprobar datos de usuario correcto', () => {
    
     it("Ingresando credenciales incorrectas", () => {
        // Abrir la página que tiene el formulario de login
        cy.visit("http://localhost:8080/login");
        // Escribir el email del usuario incorrecto
        cy.xpath('//input[@id="email"]').type("fake@email.com");
        // Escribir una contraseña incorrecta
        cy.xpath('//input[@id="pass"]').type("theFakePass123"); 
        // Click sobre el botón **Submit**
        cy.xpath('//button[@id="btn"]').click();
        //Existe el mensaje de error
        cy.xpath('//div[@id="error"]').should('exist');
      });

      it("Ingresando credenciales correctas", () => {
        // Abrir la página que tiene el formulario de login
        cy.visit("http://localhost:8080/login");
        // Escribir el email del usuario
        cy.get('#email').type("maria@pura.com");
        // Escribir una contraseña incorrecta
        cy.get("#pass").type("123456");
        // Click sobre el botón **Submit**
        cy.get("#btn").click();
        //Verificar que este en la url de inicio
        cy.url().should("include", "/Home");
        // Verificar mensaje de Bienvenido
        cy.contains("h4", "Inicio");
      });
})
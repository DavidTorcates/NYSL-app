describe('Comprobar datos de usuario correcto', () => {

    beforeEach(() => {
          // Abrir la página que tiene el formulario de login
        cy.visit("http://localhost:8080/login");
      })

     it("Ingresando credenciales incorrectas", () => {
        // Escribir el email del usuario
        cy.get('#email').type("fake@email.com");
        // Escribir una contraseña incorrecta
        cy.get("#pass").type("theFakePass123"); 
        // Click sobre el botón **Submit**
        cy.get("#btn").click();
        //Existe el mensaje de error
        cy.get('#error').should('exist');
      });

      it("Ingresando credenciales incorrectas", () => {
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
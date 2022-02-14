/// <reference types="Cypress" />

describe("Buscar Servicio sin estar logueado", () => {
  it("Landing", () => {
    cy.visit("http://localhost:3000");
  });
  it("Seleccionar y Buscar", () => {
    cy.get('select').eq(0).select('Instalación TV', {force: true});
    cy.get('select').eq(1).select('Bogotá', {force: true});
    cy.contains("Search").click({force: true});
    
    cy.wait(2000);
  });
  it("Agendar", () => {
    cy.contains("Agendar").click({force: true});
    
    cy.wait(2000);
  });
});

describe("Usuario se loguea, busca y agenda servicio", () => {
  it("Login", () => {
    cy.visit("http://localhost:3000/sessionlogin");
  });
  it("Loguea, busca y agenda", () => {
    cy.get('[placeholder="Email"]').type("osmahelo@hotmail.com");
    cy.get('[placeholder="Contraseña"]').type("123456");
    cy.contains("Iniciar Sesión").click({force: true});
    //cy.contains("Subir imagen");
    cy.wait(2000);
    cy.visit("http://localhost:3000");
    cy.get('select').eq(0).select('Instalación TV', {force: true});
    cy.get('select').eq(1).select('Bogotá', {force: true});
    cy.contains("Search").click({force: true});
    cy.wait(2000);
    cy.contains("Agendar").click({force: true});
    cy.get('[placeholder="Dirección donde requiere servicio"]').type("Av Siempre viva");
    cy.get('[placeholder="Fecha tentativa servicio"]').type("2022-03-01");
    cy.get('[placeholder="Número de contacto"]').type("555 55");
    cy.contains("Confirmar").click({force: true});
       
  
    
    
  });
  
  });
  
  
  




// describe("Login Colaborador", () => {
//   it("Session login", () => {
//     cy.visit("http://localhost:3000/sessionlogin");
//   });
//   it("login page can be open", () => {
//     cy.contains("Inicia Sesión");
//   });
//   it("login", () => {
//     cy.get('[placeholder="Email"]').type("laurafcanon@gmail.com");
//     cy.get('[placeholder="Contraseña"]').type("123456");
//     cy.contains("Iniciar Sesión").click({force: true});
//     cy.wait(5000);
//   });
// });
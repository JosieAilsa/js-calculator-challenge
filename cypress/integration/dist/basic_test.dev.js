"use strict";

describe("Addition", function () {
  it("Should give 5 + 3 = 8", function () {
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/");
    cy.contains("5").click();
    cy.contains("+").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("8");
  });
  it("Should give 25 + 3 = 8", function () {
    //Set up initial state 
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/");
    cy.contains("2").click();
    cy.contains("5").click();
    cy.contains("+").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("28");
  });
  it("Should give 25 + 3 + 3 = 31", function () {
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/");
    cy.contains("2").click();
    cy.contains("5").click();
    cy.contains("+").click();
    cy.contains("3").click();
    cy.contains("+").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("31");
  });
});
describe("Subtraction", function () {
  it("Should give 7 - 5 = 2", function () {
    //Set up initial state 
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/"); //query an elemenet 

    cy.contains("7").click();
    cy.contains("-").click();
    cy.contains("5").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("2");
  });
  it("Should give 34 - 9 = 25", function () {
    //Set up initial state 
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/"); //query an elemenet 

    cy.contains("3").click();
    cy.contains("4").click();
    cy.contains("-").click();
    cy.contains("9").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("25");
  });
  it("Should give 34 - 3 - 3 = 28", function () {
    //Set up initial state 
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/"); //query an elemenet 

    cy.contains("3").click();
    cy.contains("4").click();
    cy.contains("-").click();
    cy.contains("3").click();
    cy.contains("-").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("28");
  });
});
describe("Multiplication ", function () {
  it("Should give 2 * 2 = 4", function () {
    //Set up initial state 
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/"); //query an elemenet 

    cy.contains("2").click();
    cy.contains("*").click();
    cy.contains("2").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("4");
  });
  it("Should give 4 * 10 = 40", function () {
    //Set up initial state 
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/"); //query an elemenet 

    cy.contains("4").click();
    cy.contains("*").click();
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("40");
  });
  it("Should give 4 * 10 * 10 = 400", function () {
    //Set up initial state 
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/"); //query an elemenet 

    cy.contains("4").click();
    cy.contains("*").click();
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("*").click();
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("400");
  });
});
describe("Division", function () {
  it("Should give 4 / 2 = 2", function () {
    //Set up initial state 
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/"); //query an elemenet 

    cy.contains("4").click();
    cy.contains("/").click();
    cy.contains("2").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("2");
  });
  it("Should give 25 / 5 = 5", function () {
    //Set up initial state 
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/"); // query an elemenet 

    cy.contains("2").click();
    cy.contains("5").click();
    cy.contains("/").click();
    cy.contains("5").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("5");
  });
  it("Should give 100 / 4 / 5 = 5", function () {
    //Set up initial state 
    cy.visit("https://josieailsa.github.io/js-calculator-chalenge/"); //query an elemenet 

    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("0").click();
    cy.contains("/").click();
    cy.contains("4").click();
    cy.contains("/").click();
    cy.contains("5").click();
    cy.contains("=").click();
    cy.get("#calculator__display").contains("5");
  });
});
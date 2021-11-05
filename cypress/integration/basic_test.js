describe("Addition", () => {
    it("Should give 5 + 3 = 8", () => {
         //Set up initial state 
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/");
         //Set up initial state 
        cy.contains("5").click()
        cy.contains("+").click()
        cy.contains("3").click()
        cy.contains("=").click()
        //Check the value of the calc display 
        cy.get("#calculator__display").contains("8")
    })
    it("Should give 25 + 3 = 8", () => {
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")
        cy.contains("2").click()
        cy.contains("5").click()
        cy.contains("+").click()
        cy.contains("3").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("28")
    })
    it("Should give 25 + 3 + 3 = 31", () => {
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")
        cy.contains("2").click()
        cy.contains("5").click()
        cy.contains("+").click()
        cy.contains("3").click()
        cy.contains("+").click()
        cy.contains("3").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("31")
    })
})

describe("Subtraction", () => {
    it("Should give 7 - 5 = 2", () => {
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")
        cy.contains("7").click()
        cy.contains("-").click()
        cy.contains("5").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("2")
    })
    it("Should give 34 - 9 = 25", () => {
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")
        cy.contains("3").click()
        cy.contains("4").click()
        cy.contains("-").click()
        cy.contains("9").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("25")
    })
    it("Should give 34 - 3 - 3 = 28", () => { 
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")
        cy.contains("3").click()
        cy.contains("4").click()
        cy.contains("-").click()
        cy.contains("3").click()
        cy.contains("-").click()
        cy.contains("3").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("28")
    })
})


describe("Multiplication ", () => {
    it("Should give 2 * 2 = 4", () => {
        //Set up initial state 
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")
        //query an elemenet 
        cy.contains("2").click()
        cy.contains("*").click()
        cy.contains("2").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("4")
    })
    it("Should give 4 * 10 = 40", () => {
        //Set up initial state 
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")
        //query an elemenet 
        cy.contains("4").click()
        cy.contains("*").click()
        cy.contains("1").click()
        cy.contains("0").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("40")
    })
    it("Should give 4 * 10 * 10 = 400", () => {
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")
        cy.contains("4").click()
        cy.contains("*").click()
        cy.contains("1").click()
        cy.contains("0").click()
        cy.contains("*").click()
        cy.contains("1").click()
        cy.contains("0").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("400")
    })
})



describe("Division", () => {
    it("Should give 4 / 2 = 2", () => {
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")
        cy.contains("4").click()
        cy.contains("/").click()
        cy.contains("2").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("2")
    })
    it("Should give 25 / 5 = 5", () => {
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")
        cy.contains("2").click()
        cy.contains("5").click()
        cy.contains("/").click()
        cy.contains("5").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("5")
    })
    it("Should give 100 / 4 / 5 = 5", () => {
        cy.visit("https://josieailsa.github.io/js-calculator-chalenge/")

        cy.contains("1").click()
        cy.contains("0").click()
        cy.contains("0").click()
        cy.contains("/").click()
        cy.contains("4").click()
        cy.contains("/").click()
        cy.contains("5").click()
        cy.contains("=").click()
        cy.get("#calculator__display").contains("5")
    })
})
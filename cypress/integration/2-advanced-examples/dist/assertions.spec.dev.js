"use strict";

/// <reference types="cypress" />
context('Assertions', function () {
  beforeEach(function () {
    cy.visit('https://example.cypress.io/commands/assertions');
  });
  describe('Implicit Assertions', function () {
    it('.should() - make an assertion about the current subject', function () {
      // https://on.cypress.io/should
      cy.get('.assertion-table').find('tbody tr:last').should('have.class', 'success').find('td').first() // checking the text of the <td> element in various ways
      .should('have.text', 'Column content').should('contain', 'Column content').should('have.html', 'Column content') // chai-jquery uses "is()" to check if element matches selector
      .should('match', 'td') // to match text content against a regular expression
      // first need to invoke jQuery method text()
      // and then match using regular expression
      .invoke('text').should('match', /column content/i); // a better way to check element's text content against a regular expression
      // is to use "cy.contains"
      // https://on.cypress.io/contains

      cy.get('.assertion-table').find('tbody tr:last') // finds first <td> element with text content matching regular expression
      .contains('td', /column content/i).should('be.visible'); // for more information about asserting element's text
      // see https://on.cypress.io/using-cypress-faq#How-do-I-get-an-element’s-text-contents
    });
    it('.and() - chain multiple assertions together', function () {
      // https://on.cypress.io/and
      cy.get('.assertions-link').should('have.class', 'active').and('have.attr', 'href').and('include', 'cypress.io');
    });
  });
  describe('Explicit Assertions', function () {
    // https://on.cypress.io/assertions
    it('expect - make an assertion about a specified subject', function () {
      // We can use Chai's BDD style assertions
      expect(true).to.be["true"];
      var o = {
        foo: 'bar'
      };
      expect(o).to.equal(o);
      expect(o).to.deep.equal({
        foo: 'bar'
      }); // matching text using regular expression

      expect('FooBar').to.match(/bar$/i);
    });
    it('pass your own callback function to should()', function () {
      // Pass a function to should that can have any number
      // of explicit assertions within it.
      // The ".should(cb)" function will be retried
      // automatically until it passes all your explicit assertions or times out.
      cy.get('.assertions-p').find('p').should(function ($p) {
        // https://on.cypress.io/$
        // return an array of texts from all of the p's
        // @ts-ignore TS6133 unused variable
        var texts = $p.map(function (i, el) {
          return Cypress.$(el).text();
        }); // jquery map returns jquery object
        // and .get() convert this to simple array

        var paragraphs = texts.get(); // array should have length of 3

        expect(paragraphs, 'has 3 paragraphs').to.have.length(3); // use second argument to expect(...) to provide clear
        // message with each assertion

        expect(paragraphs, 'has expected text in each paragraph').to.deep.eq(['Some text from first p', 'More text from second p', 'And even more text from third p']);
      });
    });
    it('finds element by class name regex', function () {
      cy.get('.docs-header').find('div') // .should(cb) callback function will be retried
      .should(function ($div) {
        expect($div).to.have.length(1);
        var className = $div[0].className;
        expect(className).to.match(/heading-/);
      }) // .then(cb) callback is not retried,
      // it either passes or fails
      .then(function ($div) {
        expect($div, 'text content').to.have.text('Introduction');
      });
    });
    it('can throw any error', function () {
      cy.get('.docs-header').find('div').should(function ($div) {
        if ($div.length !== 1) {
          // you can throw your own errors
          throw new Error('Did not find 1 element');
        }

        var className = $div[0].className;

        if (!className.match(/heading-/)) {
          throw new Error("Could not find class \"heading-\" in ".concat(className));
        }
      });
    });
    it('matches unknown text between two elements', function () {
      /**
       * Text from the first element.
       * @type {string}
      */
      var text;
      /**
       * Normalizes passed text,
       * useful before comparing text with spaces and different capitalization.
       * @param {string} s Text to normalize
      */

      var normalizeText = function normalizeText(s) {
        return s.replace(/\s/g, '').toLowerCase();
      };

      cy.get('.two-elements').find('.first').then(function ($first) {
        // save text from the first element
        text = normalizeText($first.text());
      });
      cy.get('.two-elements').find('.second').should(function ($div) {
        // we can massage text before comparing
        var secondText = normalizeText($div.text());
        expect(secondText, 'second text').to.equal(text);
      });
    });
    it('assert - assert shape of an object', function () {
      var person = {
        name: 'Joe',
        age: 20
      };
      assert.isObject(person, 'value is object');
    });
    it('retries the should callback until assertions pass', function () {
      cy.get('#random-number').should(function ($div) {
        var n = parseFloat($div.text());
        expect(n).to.be.gte(1).and.be.lte(10);
      });
    });
  });
});
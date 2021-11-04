"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/// <reference types="cypress" />
context('Navigation', function () {
  beforeEach(function () {
    cy.visit('https://example.cypress.io');
    cy.get('.navbar-nav').contains('Commands').click();
    cy.get('.dropdown-menu').contains('Navigation').click();
  });
  it('cy.go() - go back or forward in the browser\'s history', function () {
    // https://on.cypress.io/go
    cy.location('pathname').should('include', 'navigation');
    cy.go('back');
    cy.location('pathname').should('not.include', 'navigation');
    cy.go('forward');
    cy.location('pathname').should('include', 'navigation'); // clicking back

    cy.go(-1);
    cy.location('pathname').should('not.include', 'navigation'); // clicking forward

    cy.go(1);
    cy.location('pathname').should('include', 'navigation');
  });
  it('cy.reload() - reload the page', function () {
    // https://on.cypress.io/reload
    cy.reload(); // reload the page without using the cache

    cy.reload(true);
  });
  it('cy.visit() - visit a remote url', function () {
    // https://on.cypress.io/visit
    // Visit any sub-domain of your current domain
    // Pass options to the visit
    cy.visit('https://example.cypress.io/commands/navigation', {
      timeout: 50000,
      // increase total time for the visit to resolve
      onBeforeLoad: function onBeforeLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(_typeof(contentWindow) === 'object').to.be["true"];
      },
      onLoad: function onLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(_typeof(contentWindow) === 'object').to.be["true"];
      }
    });
  });
});
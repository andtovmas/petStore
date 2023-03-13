// -- This is a parent command --
 Cypress.Commands.add('rewriteFixtures', (id, name) => { 
    cy.readFile("cypress/fixtures/createData.json", (err) => {
        if (err) {
            return console.error(err);
        };
    }).then((data) => {
        data.id = id
        data.name = name
        cy.writeFile("cypress/fixtures/createData.json", JSON.stringify(data))
    })
  })

import { DATA } from "../utils/messages";
describe("Find pets", () => {
  it("Find pet with valid tag", () => {
    cy.fixture("createData").then(() => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("apiUrl")}pet/findByTags`,
        form: true,
        qs: {
          tags: "tag1",
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  });
  it("Find pet with wrong endpoint", () => {
    cy.fixture("createData").then(() => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("apiUrl")}pet/findByTag`,
        failOnStatusCode: false,
        qs: {
          tags: "tag1",
        },
      }).then((resp) => {
        expect(resp.status).to.eq(400);
        expect(resp.body.message).to.eq(
          DATA.inputError
        );
      });
    });
  });
});

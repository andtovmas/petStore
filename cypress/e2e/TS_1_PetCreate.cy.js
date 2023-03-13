import { data, emptyName, emptyStatus,emptyId } from "../fixtures/createData.json";
import { DATA } from "../utils/messages";
describe("Create Pet", () => {
  it("Verify pet creation with valid data", () => {
    cy.fixture("createData").then(() => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("apiUrl")}pet`,
        form: true,
        body: data,
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.name).to.equal(data.name);
        expect(resp.body.id).to.equal(data.id);
        expect(resp.body.status).to.equal(data.status);
      });
    });
  });

  it("Verify pet creation with empty name data", () => {
    cy.fixture("createData").then(() => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("apiUrl")}pet`,
        form: true,
        body: emptyName,
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.name).to.be.undefined;
        expect(resp.body.id).to.equal(emptyName.id);
        expect(resp.body.status).to.equal(emptyName.status);
      });
    });
  });
  it("Verify pet creation with empty status data", () => {
    cy.fixture("createData").then(() => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("apiUrl")}pet`,
        form: true,
        body: emptyStatus,
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.status).to.be.undefined;
        expect(resp.body.name).to.equal(emptyStatus.name);
      });
    });
  });
  it("Verify pet creation with empty id data", () => {
    cy.fixture("createData").then(() => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("apiUrl")}pet`,
        failOnStatusCode: false,
        form: true,
        body: emptyId,
      }).then((resp) => {
        expect(resp.status).to.eq(500);
        expect(resp.body.message).to.include(DATA.serverError)
      });
    });
  });
});

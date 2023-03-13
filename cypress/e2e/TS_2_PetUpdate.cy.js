import { data} from '../fixtures/createData.json'
import { DATA } from "../utils/messages";
describe("Pet Update", () => {
  it("Verify pet update with valid data", () => {
      cy.fixture("createData").then(() => {
        cy.request({
          method: "PUT",
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
  it("Verify pet update with invalid endpoint", () => {
    cy.fixture("createData").then(() => {
      cy.request({
        method: "PUT",
        url: `${Cypress.env("apiUrl")}`,
        failOnStatusCode: false,
        form: true,
        body: data,
      }).then((resp) => {
        expect(resp.status).to.eq(404);
        expect(resp.body.message).to.eq(DATA.notFound)
       });
    });
});
it("Verify pet update with wrong method", () => {
    cy.fixture("createData").then(() => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("apiUrl")}pet`,
        failOnStatusCode: false,
        form: true,
        body: data,
      }).then((resp) => {
        expect(resp.status).to.eq(405);
        expect(resp.body.message).to.eq(DATA.methodNotAllowed)
       });
    });
});
});
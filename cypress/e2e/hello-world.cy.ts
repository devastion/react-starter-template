describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:4173/");
    cy.contains("Hello, world!");
  });
});

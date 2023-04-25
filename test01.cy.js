describe("GET", () => {
  it("response code should be 200", () => {
    cy.request("https://httpbin.org/get").then((response) => {
      assert.equal(200, response.status);
    });
  });
});

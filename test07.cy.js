describe("RESPONSE TIMEOUT", () => {
  it("response timeout test", () => {
    cy.request("https://httpbin.org").then((response) => {
      assert.isFalse(response.duration <= 100);
    });
  });
});

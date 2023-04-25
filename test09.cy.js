describe("RANDOM PARAMETERS", () => {
  it("GET some random params", () => {
    const randomParam = Math.floor(Math.random() * 5);
    cy.request("https://httpbin.org").then((response) => {
      assert.equal(200, response.status), assert.equal(response.randomParam);
    });
  });
});

describe("PATCH", () => {
  const request = {
    method: "PATCH",
    url: "https://httpbin.org/patch",
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

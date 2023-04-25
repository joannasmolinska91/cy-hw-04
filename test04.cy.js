describe("PUT", () => {
  const request = {
    method: "PUT",
    url: "https://httpbin.org/put",
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

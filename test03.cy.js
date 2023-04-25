describe("DELETE", () => {
  const request = {
    method: "DELETE",
    url: "https://httpbin.org/delete",
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

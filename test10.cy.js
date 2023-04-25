describe("DELAYED", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/delay/10",
  };

  it("A DELAYED RESPONSE", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

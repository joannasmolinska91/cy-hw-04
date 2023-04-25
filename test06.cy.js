describe("HEADERS", () => {
  const request = {
    method: "PUT",
    url: "https://httpbin.org/put",
    headers: {
      customHeader: "myHeader",
    },
    failOnStatusCode: false,
  };

  it("my header set correctly", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("myHeader", response.requestHeaders.customHeader);
    });
  });
});

describe("RESPONSE ANYTHING", () => {
  const request = {
    method: "DELETE",
    url: "https://httpbin.org/anything",
  };

  it("response anything DELETE method version", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status), assert.equal(response.json);
    });
  });
});

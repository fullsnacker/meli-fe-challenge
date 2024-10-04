const { getProductsByQuery } = require("../services");

const axios = require("axios").default;

describe("testing of service getProductsByQuery", () => {
  it("status should be 200", async () => {
    await getProductsByQuery("test").then((result) => {
      expect(result.status).toBe(200);
    });
  });

  it("should test result data", async () => {
    await getProductsByQuery("iphone").then((result) => {
      expect(result.data.results.length).toBe(4);
    });
  });

  it("status should be 404", async () => {
    axios.get = jest.fn().mockImplementation(() => ({ status: 404 }));

    await getProductsByQuery("").then((result) => {
      expect(result.status).toBe(404);
    });
  });
});

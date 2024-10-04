const { getProductById } = require("../src/services");

const axios = require("axios").default;

describe("testing of service getProductById", () => {
  it("status should be 200", async () => {
    await getProductById("MLA1293214776").then((result) => {
      expect(result.status).toBe(200);
    });
  });

  it("should test result data", async () => {
    await getProductById("MLA1293214776").then((result) => {
      expect(result.data.id).toBe("MLA1293214776");
    });
  });

  it("status should be 404", async () => {
    axios.get = jest.fn().mockImplementation(() => ({ status: 404 }));

    await getProductById("").then((result) => {
      expect(result.status).toBe(404);
    });
  });
});

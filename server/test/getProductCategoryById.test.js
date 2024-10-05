const {getProductCategoryById} = require("../src/services");

import {default as axios} from "axios";

describe("testing of service getProductCategoryById", () => {
	it("status should be 200", async () => {
		await getProductCategoryById("MLA1051").then((result) => {
			expect(result.status).toBe(200);
		});
	});

	it("should test result data", async () => {
		await getProductCategoryById("MLA1051").then((result) => {
			expect(result.data.id).toBe("MLA1051");
		});
	});

	it("status should be 404", async () => {
		axios.get = jest.fn().mockImplementation(() => ({status: 404}));

		await getProductCategoryById("").then((result) => {
			expect(result.status).toBe(404);
		});
	});
});

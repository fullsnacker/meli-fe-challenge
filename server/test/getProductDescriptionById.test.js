const {getProductDescriptionById} = require("../src/services");

import {default as axios} from "axios";

describe("testing of service getProductDescriptionById", () => {
	it("status should be 200", async () => {
		await getProductDescriptionById("MLA1293214776").then((result) => {
			expect(result.status).toBe(200);
		});
	});

	it("should test result data", async () => {
		await getProductDescriptionById("MLA1293214776").then((result) => {
			expect(result.data.plain_text).not.toBeNull();
		});
	});

	it("status should be 404", async () => {
		axios.get = jest.fn().mockImplementation(() => ({status: 404}));

		await getProductDescriptionById("").then((result) => {
			expect(result.status).toBe(404);
		});
	});
});

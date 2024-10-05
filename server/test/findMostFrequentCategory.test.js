import {findMostFrequentCategory} from "../src/utils";

describe("testing of utils findMostFrequentCategory", () => {
	it("should find most frequent category", () => {
		const data = {
			results: [
				{category_id: 1234, category: "electronics"},
				{category_id: 2987, category: "fashion"},
				{category_id: 1234, category: "electronics"},
				{category_id: 4765, category: "toys"},
				{category_id: 1234, category: "electronics"},
			],
		};

		const result = findMostFrequentCategory(data);

		expect(result).toEqual("1234");
	});

	it("should find first item if most frequent not exist", () => {
		const data = {
			results: [
				{category_id: 1234, category: "electronics"},
				{category_id: 2987, category: "fashion"},
				{category_id: 1267, category: "clothes"},
				{category_id: 4765, category: "toys"},
				{category_id: 1229, category: "books"},
			],
		};

		const result = findMostFrequentCategory(data);

		expect(result).toEqual("1234");
	});

	it("should find first most frequent", () => {
		const data = {
			results: [
				{category_id: 1234, category: "electronics"},
				{category_id: 1229, category: "fashion"},
				{category_id: 1229, category: "fashion"},
				{category_id: 1267, category: "toys"},
				{category_id: 1267, category: "toys"},
			],
		};

		const result = findMostFrequentCategory(data);

		expect(result).toEqual("1229");
	});
});

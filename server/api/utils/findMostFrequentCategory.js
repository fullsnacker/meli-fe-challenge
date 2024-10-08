/**
 * Obtiene la categoria que mas aparecio entre los productos del listado de resultado
 */

const findMostFrequentCategory = (data) => {
	const frequencyMap = {};

	data.results.forEach((item) => {
		const category_id = item.category_id;
		frequencyMap[category_id] = (frequencyMap[category_id] || 0) + 1;
	});

	let mostFrequent = data.results[0].category_id;
	let maxCount = frequencyMap[mostFrequent];

	for (let category_id of data.results.map((item) => item.category_id)) {
		if (frequencyMap[category_id] > maxCount) {
			mostFrequent = category_id;
			maxCount = frequencyMap[category_id];
		}
	}

	return mostFrequent;
};

export {findMostFrequentCategory};

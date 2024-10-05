const findMostFrequentCategory = (data) => {
	const frequencyMap = {};

	data.results.forEach((item) => {
		const category_id = item.category_id;
		frequencyMap[category_id] = (frequencyMap[category_id] || 0) + 1;
	});

	let mostFrequent = data.results[0].category_id.toString();
	let maxCount = 1;

	for (let category_id in frequencyMap) {
		if (frequencyMap[category_id] > maxCount) {
			mostFrequent = category_id;
			maxCount = frequencyMap[category_id];
		}
	}

	return mostFrequent;
};

export {findMostFrequentCategory};

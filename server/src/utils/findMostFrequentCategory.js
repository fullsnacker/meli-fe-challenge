const findMostFrequentCategory = (data) => {
  // Crear un mapa para contar las frecuencias de las categorías
  const frequencyMap = {};

  // Recorrer el array de resultados y contar la frecuencia de cada categoría
  data.results.forEach((item) => {
    const category_id = item.category_id;
    frequencyMap[category_id] = (frequencyMap[category_id] || 0) + 1;
  });

  // Encontrar la categoría más frecuente
  let mostFrequent = data.results[0].category_id; // Por defecto, devolver la primera categoría
  let maxCount = 1;

  for (let category_id in frequencyMap) {
    if (frequencyMap[category_id] > maxCount) {
      mostFrequent = category_id;
      maxCount = frequencyMap[category_id];
    }
  }

  return mostFrequent;
};

module.exports = findMostFrequentCategory;

export const shuffle = (array) => {
  const result = array.slice();
  for (let index = result.length - 1; index > 0; index--) {
    const newIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[newIndex]] = [result[newIndex], result[index]];
  }

  return result;
};

export const pickSet = (array, count) => {
  const result = [];
  while (result.length < count) {
    result.push(array[Math.floor(Math.random() * array.length)]);
  }
  return result;
};

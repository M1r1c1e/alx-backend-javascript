export default function appendToEachArrayValue(array, appendString) {
  const currentArray = [];

  for (const idx of array) {
    currentArray.push(appendString + idx);
  }

  return currentArray;
}

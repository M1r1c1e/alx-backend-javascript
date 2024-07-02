export default function hasValuesFromArray(set, array) {
  let booLean = true;

  if (array.length === 0) return false;

  for (const number of array) {
    if (!set.has(number)) {
      booLean = false;
      break;
    }
  }
  return booLean;
}

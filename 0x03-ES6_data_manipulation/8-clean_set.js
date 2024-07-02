export default function cleanSet(set, startString) {
  const setArray = [...set];

  if (startString === undefined || startString.length === 0) return '';

  return setArray
    .filter((wordStr) => (wordStr !== undefined ? wordStr.startsWith(startString) : ''))
    .map((wordStr) => (wordStr !== undefined ? wordStr.slice(startString.length) : ''))
    .join('-');
}

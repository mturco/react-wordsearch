export function create2dArray(length1, length2, value) {
  const array = new Array(length1);
  for (let i = 0; i < length1; i++) {
    array[i] = new Array(length2);
    for (let j = 0; j < length2; j++) {
      array[i][j] = value;
    }
  }
  return array;
}

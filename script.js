function filterArray(arr) {
  const temporary = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      temporary.push(arr[i]);
    }
  }
  return temporary;
}
const arrayRandom = [1, 2, 3, 4, 5, 6, 7];

console.log(filterArray(arrayRandom));

const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2];

function uniqueValues(arr) {
  let obj = {};
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(uniqueValues(arr));




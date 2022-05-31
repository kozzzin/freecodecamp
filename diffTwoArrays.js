function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.forEach(x => {
        if (!arr2.includes(x) && !newArr.includes(x)) {
            newArr.push(x);
        }
    });

    arr2.forEach(x => {
        if (!arr1.includes(x) && !newArr.includes(x)) {
            newArr.push(x);
        }
    });

    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
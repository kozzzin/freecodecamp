function destroyer(arr) {
    const toDestroy = [...arguments].filter(x => !Array.isArray(x));
    console.log(toDestroy);
    // return arr.filter(x => !toDestroy.includes(x));
    for  (let i = 0;  i < arr.length; i++) {
        if (toDestroy.indexOf(arr[i]) !== -1) {
            console.log(arr[i]);
            arr.splice(i,1);
        }
    }
    return arr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

  arr.splice()
function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    for (let obj of collection) {
      let keysLength = 0;
      for (let el of Object.keys(source)) {
        if (obj[el] === source[el]) keysLength += 1;
      }
      console.log(obj, keysLength, Object.keys(source).length)
      if (keysLength === Object.keys(source).length)  {
          arr.push(obj);
      }
    }
    // Only change code above this line
    return arr;
  }
  
  console.log( whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });

  console.log('B' === 'B'.toLowerCase());
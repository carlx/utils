const avg = (list) => list.reduce((p, c) => p + c) / list.length

//filter array to have uniqe values
const uniquekeys = keys.filter((elem, pos, arr) => {
    return arr.indexOf(elem) === pos;
  });
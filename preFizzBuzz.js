/**
 * This function takes an integer n and returns an array populated from 1 to n
 * @param {integer} n 
 * @returns integer array
 */
function preFizz(n) {
    return [...Array(n+1).keys()].slice(1)
  }
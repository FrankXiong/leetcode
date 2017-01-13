/**
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let arr = s.split(''), result = 0;
    for(let i = arr.length; i > 0; i--) {
        result += (arr[i-1].charCodeAt(0) - 64) * Math.pow(26, arr.length - i);
    }
    return result;
};

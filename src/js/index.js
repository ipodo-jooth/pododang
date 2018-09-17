"use strict"

/* 
@author: jooth
@name: getCalculator
@param: {array}
@return: {object}
@descript: get maximum price
 */
function getCalculator(sets) {
    var n = sets.length, max = 0;

    for(let m in sets) {
        let den = parseInt(m) + 1;
        let mok = Math.floor(n / den);
        let nmg = Math.floor(n % den);
        let calc = mok * sets[m];
        
        if(nmg != 0) {
            var nSets = sets.slice(0, nmg);
            var leng = nSets.length;
            calc += getCalculator(leng, nSets);
        }
        
        max = max < calc ? calc : max;
    }
    return max;
}

/* 
@author: jooth
@name: toSell
@param: {number}
@param: {number}
@param: {array}
@return: {array}
@descript: get bread price
 */
function toSell() {
    var form = document.forms[0];
    var count = parseInt(form.elements[0].value);
    var arr = form.elements[1].value.split(",");
    arr.forEach((n, m) => { arr[m] = parseInt(n); });

    if(arr.length != count) return alert("입력 값을 확인하세요.");

    var result = getCalculator(arr);
    
    form.elements[2].value = result;
}
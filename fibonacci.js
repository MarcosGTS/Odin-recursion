function fibs(n) {
    let result = [0, 1]; 

    if (n <= 2) return result.slice(0, n);

    for (let i = 1; i < n - 1; i++) {
        result.push(result[i] + result[i-1]);
    }

    return result
}

function fibsRec(n) {
    if (n <= 0) return [];
    if (n == 1) return [0];
    if (n == 2) return [0, 1]
    
    let list = fibsRec(n - 1);
    list.push(list[n-2] + list[n-3]);

    return list
}

console.log(fibsRec(8));

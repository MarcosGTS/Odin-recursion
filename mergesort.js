function mergesort(list) {
    
    function helper(list, start, end) {
        let diff = end - start;
        let center = Number.parseInt((end + start) / 2);

        if (diff < 2) return
        
        helper(list, start, center); //sort left
        helper(list, center, end);   //sort right
        
        merge(start, center, end);
    }
    
    function merge(start, center, end) {
        console.log(start, center, end);
    }

    return  helper(list, 0, list.length);
}

let list = [5, 4, 3, 2, 1];
mergesort(list);

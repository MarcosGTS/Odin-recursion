function mergesort(list) {
    
    function helper(list, start, end) {
        let diff = end - start;
        let center = Number.parseInt((end + start) / 2);

        if (diff < 2) return
        
        helper(list, start, center); //sort left
        helper(list, center, end);   //sort right
        
        merge(list, start, center, end);
    }
    
    function merge(list, start, center, end) {
       let smaller1 = start;
       let smaller2 = center;
       let sortedSection = [];

       while (smaller1 < center && smaller2 < end) { 
            if (list[smaller1] < list[smaller2]) {
                sortedSection.push(list[smaller1]); 
                smaller1++;
            } else {
                sortedSection.push(list[smaller2]); 
                smaller2++;
            }
       }

       for (let i = smaller1; i < center; i++) {
            sortedSection.push(list[i]);
       }
      
       for (let i = smaller2; i < end; i++) {
            sortedSection.push(list[i]);
       }

       for (let i = start; i < end; i++) {
            list[i] = sortedSection[i - start];
       }
    }

    helper(list, 0, list.length);

    return list;
}

let list = [1, 2, 3, 4, 5, 6];
console.log(mergesort(list));

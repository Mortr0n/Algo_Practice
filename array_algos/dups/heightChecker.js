var heightChecker = function(heights) {
    let hCopy = [...heights];
    let count = 0;
    for(let i = 0; i < hCopy.length; i++){
        for(let j = 0; j < hCopy.length; j++){
            if(hCopy[i] < hCopy[j]){
                let temp = hCopy[i];
                hCopy[i] = hCopy[j];
                hCopy[j] = temp;
            }
        }
    }
    for(let k = 0; k < heights.length; k++){
        if(hCopy[k] !== heights[k]){
            count++;
        }
    }
    return count
};
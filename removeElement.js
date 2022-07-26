var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            if(nums[i-1] !== val){
                k++
            }
            k++
        }
        if(nums[i] === val){
            for(let j = i; j < nums.length - 1; j++){
                nums[j] = nums[j+1];
            }
        }
    }
    return k;
};

console.log(removeElement([3,2,2,3], 3))
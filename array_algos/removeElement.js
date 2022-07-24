var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        console.log(i, nums[i], val)
        if(nums[i] !== val){
            console.log("i - 1", nums[i-1])
            if(nums[i-1] !== val){
                k++
            }
            k++
            console.log("hi", k)
        }
        if(nums[i] === val){
            for(let j = i; j < nums.length - 1; j++){
                nums[j] = nums[j+1];
            }
        }
        console.log(nums, k)
    }
    return k;
};

console.log(removeElement([3,2,2,3], 3))
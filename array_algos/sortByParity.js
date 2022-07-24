var sortArrayByParity = function(nums) {
    let temp = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 !== 0){
            temp = nums[i];
            for(let j = i; j < nums.length; j++){
                if(nums[j] % 2 === 0){
                    nums[i] = nums[j];
                    nums[j] = temp;
                    break;
                }
            }
        }
    
    }
    return nums
};
sortArrayByParity([3,1,2,4])
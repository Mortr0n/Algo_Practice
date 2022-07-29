var thirdMax = function(nums) {
    let i = 0;
    let max1 = 0;
    let max2 = 0;
    let max3 = Math.max(...nums);
    while(i < nums.length){
        console.log(max3, max2, max1, nums)
        if(nums[i] > max2 && nums[i] < max3){
            max2 = nums[i]
            if(i > 0){
                i = 0
            }
        }
        if(nums[i] > max1 && nums[i] < max2){
            max1 = nums[i]
        }
        if(nums.length < 3){
            return max3
        }
        if(max1 === 0){
            return max3
        } else {
            return max1
        }
    }
}

console.log(thirdMax([1,2, -2147483648]))

thirdMax(2,2,3,1)
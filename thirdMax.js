var thirdMax = function(nums) {
    let i = 0;
    let max1 = 0;
    let max2 = 0;
    let max3 = 0;
    while(i < nums.length){
        if(nums[i] > max3){
            max3 = nums[i]
            if(i > 0){
                i--
            }
        }
        if(nums[i] > max2 && nums[i] < max3){
            max2 = nums[i]
            if(i > 0){
                i--
            }
        }
        if(nums[i] > max1 && nums[i] < max2){
            max1 = nums[i]
            if(i > 0){
                i--
            }
        }
        i++
        console.log(i, max3, max2, max1)
    }
    if(max1 === 0){
        return max3
    } else {
        return max1
    }

};

console.log(thirdMax([1,2,2,5,3,5]))

thirdMax(2,2,3,1)
const findMaxConsecutiveZeros = (nums) => {
    let longest = 0;
    let zeros = 0;
    let left = 0;
    let right = 0;
    while(right < nums.length){
        if(nums[right] === 0){
            zeros++;
        }
        while(zeros === 2){
            console.log(zeros, left)
            if(nums[left] == 0){
                zeros--;
            }
            left++;
        }
        longest = Math.max(longest, right - left + 1);
        right++
    }
    console.log("right, left, zeros",right, left, zeros)
    return longest;
}

console.log(findMaxConsecutiveZeros([1,0,0,1,1,0,1]))
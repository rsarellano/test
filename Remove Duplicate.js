var removeDuplicate =  function (nums){
    let k = 1

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !==  nums[i-1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}


console.log(removeDuplicate([1,1,2,3,5]))
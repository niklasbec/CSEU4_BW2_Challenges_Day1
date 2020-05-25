var containsDuplicate = function(nums) {
    let done =  []
    let duplicates = 0
    nums.forEach(curr => {
        if(done.includes(curr)) {
            duplicates = duplicates + 1
        } else {
            done.push(curr)
        }
    })
    if(duplicates === 0) {
        console.log(`${duplicates} duplicates found`)
        return false
    } else {
        console.log(`${duplicates} duplicates found`)
        return true
    }
}


nums = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 20]
nums2 = [1, 2, 3, ,4 ,5 ,6 ,7 , 8 ,9]

console.log("-------------------------------")
console.log("THIS SHOULD FIND DUPLICATES")
console.log("-------------------------------")
console.log(containsDuplicate(nums))
console.log("-------------------------------")
console.log("THIS SHOULDN'T FIND DUPLICATES")
console.log("-------------------------------")
console.log(containsDuplicate(nums2))
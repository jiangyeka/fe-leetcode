/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  // 旋转数组性质，旋转点以后得元素都满足< nums[0] ,前面的满足>=nums[0]
  while (nums[nums.length - 1] === nums[nums.length - 2] || nums[nums.length - 1] === nums[0])
    nums.pop()
  let l = 0
  let r = nums.length - 1
  if (nums[0] > nums[nums.length - 1]) {
    while (l < r) {
      const mid = l + r >> 1
      if (nums[mid] >= nums[0])
        l = mid + 1
      else r = mid
    }
    if (nums[0] === target)
      return 0
    if (nums[0] > target) {
      r = nums.length - 1
    }
    else {
      r = l - 1
      l = 0
    }
  }

  while (l < r) {
    const mid = l + r >> 1
    if (nums[mid] >= target)
      r = mid

    else l = mid + 1
  }
  return nums[l] === target ? l : -1
}

nums = [2,7,11,15]
target = 18
n = len(nums)
for i in range(n-1):
  for j in range(i+1,n):
    if nums[i]+ nums[j] == target:
      print(i,j)
      break
# o(n^2)

left,right = 0,n-1

while left < right:
  if nums[left] + nums[right] == target:
    print([left,right])
    break
  if nums[left] + nums[right] > target: 
    right -= 1
  else:
    left += 1

# o(n)




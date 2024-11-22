

s1 = "dfa12321afd";

s = set(s1);   # // 0(n)    # o(k)  space
# print(str) 
a = []
for i in s:
  if i.isnumeric():
    a.append(i)    # o(m)  space
a.sort()   # O(mlogm)
if len(a) < 2:
  print(-1)
else:
  print(a[-2])


# overall time complexity 
# O(n+mlogm),

# Overall Space Complexity: 

# O(k+m), but since 
# m≤k≤n, the space complexity is 
# O(n).

print("Optimize way")

s2 = "dfa12321afd"

# Initialize variables to track the largest and second-largest numbers
largest = -1
second_largest = -1

# Iterate through each character in the string
for char in s2:     # o(n)
    if char.isnumeric():
        num = int(char)
        if num > largest:
            # Update second largest and largest
            second_largest = largest
            largest = num
        elif num > second_largest and num != largest:
            # Update second largest if the number is distinct
            second_largest = num

# Check and print the result
print(second_largest if second_largest != -1 else -1)

# Total Time Complexity: 
# O(n)

# Space Complexity:
# Only constant extra space is used for the largest and second_largest variables.
# Total Space Complexity: 
# O(1).
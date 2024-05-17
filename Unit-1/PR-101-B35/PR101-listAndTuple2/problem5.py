# Problem 5: Maximum and Minimum in a Tuple
# Description: Write a Python program to find the maximum and minimum numbers in a tuple of integers without using the built-in max() and min() functions.
# Sample Input: (5, 10, 3, 15, 2, 20)
# Sample Output:
# Maximum: 20
# Minimum: 2

input = (5,10,3,15,2,20)
max1 = input[0]
min2 = input[0]
for i in range(len(input)):
    if max1 < input[i]:
        max1 = input[i]
    if min2 > input[i]:
        min2 = input[i]
print(max1)
print((min2))

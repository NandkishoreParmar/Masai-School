# Find Minimum

# Write a function named findMinMax that takes an array of numbers as input and returns the minimum value present in the array. The values should be the minimum numbers in the input array, respectively.

# Sample Input: arr = [15, 2, 34, 8, 19]

# Sample Output: min = minimum(arr) ;

# //output: min = 2 ;

def minimum(arr):
    min1 = arr[0]
    for i in range(len(arr)):
        if min1 > arr[i]:
            min1 = arr[i]
    return min1

arr = [15,2,34,8,19]  
minim = minimum(arr)


print(minim)
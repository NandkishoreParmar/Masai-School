def has_subarray_with_sum(arr, k):
    n = len(arr)
    for i in range(n):
        sum_so_far = 0
        for j in range(i, n):
            sum_so_far += arr[j]
            # print()
            if sum_so_far == k:
                return True
    return False

# Test the function with the provided example
arr = [1, 4, 3, 2, 5, 7]
k = 9
result = has_subarray_with_sum(arr, k)
print(result)  # Output: True

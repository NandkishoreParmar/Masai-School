# name = input()                  # Reading input from STDIN
# print('Hi, %s.' % name)         # Writing output to STDOUT
def binary_search(arr, key, findFirst):
    low, high = 0, len(arr) - 1
    result = -1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == key:
            result = mid
            if findFirst:
                high = mid - 1  # Search left for the first occurrence
            else:
                low = mid + 1  # Search right for the last occurrence
        elif arr[mid] < key:
            low = mid + 1
        else:
            high = mid - 1
    return result

def find_occurrences(arr, key):
    first = binary_search(arr, key, True)
    last = binary_search(arr, key, False)
    if first == -1:  # Element not found
        return -1, -1, 0
    count = last - first + 1
    return first, last, count

# Input
n = int(input())
arr = list(map(int, input().split()))
key = int(input())

# Output
first, last, count = find_occurrences(arr, key)
print(first, last, count)


# 6
# 1 1 1 2 2 2	
# 1

# 0 2 3
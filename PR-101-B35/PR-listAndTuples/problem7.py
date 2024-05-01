# ### Problem 7: Remove Duplicates

# **Description:** Given a list of numbers, write a Python program to remove all duplicates and return a tuple with the remaining elements sorted in ascending order.

# **Sample Input:** `[1, 2, 3, 4, 3, 2, 1]`

# **Sample Output:** `(1, 2, 3, 4)`

list1 = [1, 2, 3, 4, 3, 2, 1]
set1 = set(list1)
tup = tuple(set1)

print(tup)
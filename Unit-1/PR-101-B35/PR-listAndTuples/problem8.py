# ### Problem 8: Set Symmetric Difference

# **Description:** Write a Python program to find the symmetric difference between two sets. The symmetric difference is a set of elements in either set, but not in their intersection.

# **Sample Input:**

# - Set 1: `{1, 2, 3, 4}`
# - Set 2: `{3, 4, 5, 6}`

# **Sample Output:** `{1, 2, 5, 6}`

set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

diff = set1.symmetric_difference(set2)

print(diff)
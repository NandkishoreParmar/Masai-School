# ### Problem 3: Intersection of Multiple Sets

# **Description:** Write a Python program to find the intersection of more than two sets. Do not use the built-in intersection method.

# **Sample Input:**

# - Set 1: `{1, 2, 3, 4, 5}`
# - Set 2: `{4, 5, 6, 7}`
# - Set 3: `{4, 5, 8, 9}`

# **Sample Output:** `{4, 5}`
set1 = {1,2,3,4,5}
set2 = {4,5,6,7,}
set3 = {4,5,8,9}
ans = set1.intersection(set2).intersection(set3)

print(ans)
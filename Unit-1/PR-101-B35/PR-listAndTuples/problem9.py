# ### Problem 9: Set Difference

# **Description:** Write a Python program to find the difference between two sets. The difference is a set of elements that are in the first set but not in the second set.

# **Sample Input:**

# - Set 1: `{10, 20, 30, 40, 50}`
# - Set 2: `{40, 50, 60, 70, 80}`

# **Sample Output:** `{10, 20, 30}`

Set1 = {10, 20, 30, 40, 50}
Set2 ={40, 50, 60, 70, 80}

firstdiff = Set1.difference(Set2)
print(firstdiff)
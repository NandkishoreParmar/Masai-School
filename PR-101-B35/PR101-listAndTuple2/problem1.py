# ### Problem 1: Set Union Without Duplicates

# **Description:** Write a Python program to perform the union of three sets without using the built-in union method. Ensure there are no duplicates in the final set.

# **Sample Input:**

# - Set 1: `{1, 2, 3}`
# - Set 2: `{3, 4, 5}`
# - Set 3: `{5, 6, 7}`

# **Sample Output:** `{1, 2, 3, 4, 5, 6, 7}`
Set1 ={1, 2, 3}
Set2 = {3, 4, 5}
Set3 = {5, 6, 7}

ans = Set1.union(Set2).union(Set3)
print(ans)

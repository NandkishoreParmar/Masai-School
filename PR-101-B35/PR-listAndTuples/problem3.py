# ### Problem 3: Set Operations - Union and Intersection

# **Description:** Given two sets, write a Python program to perform the following operations:

# - Print their union.
# - Print their intersection.

# **Sample Input:**

# - Set 1: `{1, 2, 3, 4, 5}`
# - Set 2: `{4, 5, 6, 7, 8}`

# **Sample Output:**

# - Union: `{1, 2, 3, 4, 5, 6, 7, 8}`
# - Intersection: `{4, 5}`

Set1= {1, 2, 3, 4, 5}
Set2= {4, 5, 6, 7, 8}

union = Set1.union(Set2)

intersection = Set1.intersection(Set2)

print("Union :", union)
print("Intersection : ",intersection)

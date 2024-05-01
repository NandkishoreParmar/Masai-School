# ### Problem 4: Subset Verification

# **Description:** Write a Python program to check if a set is a subset of another set. Do not use the built-in method for subset verification.

# **Sample Input:**

# - Set 1 (potential subset): `{1, 2, 3}`
# - Set 2: `{1, 2, 3, 4, 5, 6}`

# **Sample Output:** `True`

# def is_subset(set1, set2):
#     for element in set1:
#         if element not in set2:
#             return False
#     return True

# # Sample Input
# set1 = {1, 2, 3}
# set2 = {1, 2, 3, 4, 5, 6}

# # Check if set1 is a subset of set2
# is_subset = is_subset(set1, set2)

# # Output the result
# print(is_subset)

set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5, 6}
subset = True
for i in set1:
    if i not in set2:
        subset = False
        break
print(subset)
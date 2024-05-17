# ### Problem 6: Tuple Element Existence

# **Description:** Write a Python program to check if a given element exists in a tuple.

# **Sample Input:** Tuple - `(10, 9, 8, 7, 6, 5)`, Element to check - `9`

# **Sample Output:** `True`

tup = (10, 9, 8, 7, 6, 5)
for i in range(len(tup)):
    if tup[i]  == 9:
        print("True")
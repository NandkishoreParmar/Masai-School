# ### Problem 2: Tuple Sum

# **Description:** Write a Python program to calculate the sum of all numbers in a given tuple.

# **Sample Input:** `(8, 2, 3, 0, 7)`

# **Sample Output:** `20`

tup = (8,2,3,0,7)
tupsum = 0
for i in range(len(tup)):
    tupsum = tupsum + tup[i]
print("sum of tuple ",tupsum)
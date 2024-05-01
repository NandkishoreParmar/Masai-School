# ### Problem 5: Find the Largest Number in a List

# **Description:** Write a Python program to find the largest number in a given list.

# **Sample Input:** `[4, 65, 32, 2, 104, 78, 10]`

# **Sample Output:** `104`

list1 = [4, 65, 32, 2, 104, 78, 10]
max1 = list1[0]
for i in range(len(list1)):
    if max1 < list1[i]:
        max1 = list1[i]
print(max1)
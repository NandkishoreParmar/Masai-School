### Problem 1: Unique Element Finder

# **Description:** Write a Python program to find all the unique elements in a given list. Your program should display the unique elements in the form of a list.

# **Sample Input:** `[1, 2, 2, 3, 4, 5, 3, 6, 4]`

# **Sample Output:** `[1, 5, 6]`

def findelements(list1):
    seen = set()
    unique_elements = []

    for num in list1:
        if num not in seen:
            seen.add(num)
            unique_elements.append(num)
        elif num in unique_elements:
            unique_elements.remove(num)

    print(unique_elements)

# Sample input
input = [1, 2, 2, 3, 4, 5, 3, 6, 4]

# Print unique elements
findelements(input)

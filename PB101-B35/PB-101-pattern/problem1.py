# ### Title: Heart Pattern with Loops

# ### Level: Level 1 - Easy

# ### Time to Solve the Problem: 15 Mins

# ### Problem Description

# Generate a heart pattern using asterisks (\*) and spaces, utilizing loops for dynamic creation.

# ### Input

# **Input Format:**

# - No direct input is required.

# ### Output

# **Output Format:**

# - The program should output a heart shape with asterisks.
N = 6
print( " "+"*" * 3 + " " * 3 + "*" * 3)
print("*" * 5 + " " + "*" * 5)
for num in range(N, 0, -1):
        # Print spaces before the asterisks
        for j in range(N - num):
            print(" ", end="")
        # Print asterisks
        for k in range(2 * num - 1):
            print("*", end="")
        print()
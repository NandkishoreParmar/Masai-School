n = 5
start_char = 'A'  # Starting character

for i in range(1, n + 1):
    char = chr(ord(start_char) + i - 1 )  # Determine the character for the current row
    for j in range(i):
        print(char, end=" ")
    print()

# A 
# B B
# C C C
# D D D D
# E E E E E
print("another one ")

for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(chr(ord('A') + j - 1), end=" ")
    print()

# A
# A B
# A B C
# A B C D
# A B C D E
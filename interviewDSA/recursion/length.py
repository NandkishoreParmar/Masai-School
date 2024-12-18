def find_length(s):
    if s == "":  # Base case: empty string
        return 0
    return 1 + find_length(s[1:])  # Recursive call with the rest of the string

# Example
# s = input()
s = "masaischool"
print(find_length(s))  # Output: 11
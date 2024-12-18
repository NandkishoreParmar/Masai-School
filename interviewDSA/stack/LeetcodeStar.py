def removeStars(s: str) -> str:
    stack = []
    
    for char in s:
        if char == '*':
            stack.pop()  # Remove the most recent character when a star is encountered
        else:
            stack.append(char)  # Add non-star characters to the stack
    
    return ''.join(stack)  # Convert the stack back to a string

# Test cases
print(removeStars("leet**cod*e"))  # Output: "lecoe"
print(removeStars("erase***"))   # Output: "er"
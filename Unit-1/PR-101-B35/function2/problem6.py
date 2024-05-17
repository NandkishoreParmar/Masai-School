# Write a function named calculateAverage that takes an array of numbers as input and returns the average (mean) of those numbers.

# Sample Input: [10, 15, 20, 25]

# Sample Output: 17.5

def Average(numbers):
  if not numbers:
    return 0  
  else:
    return sum(numbers) / len(numbers)


numbers = [10, 15, 20, 25]
ans = Average(numbers)
print("Output:", ans)
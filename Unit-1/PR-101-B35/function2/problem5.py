# Write a function named calculateFactorial that takes an integer n as input and returns the factorial of n (n!). Use this function to calculate the factorial of a given number.

# result = calculateFactorial(5);

# // Sample Output: result = 120

def Factorial(n):
  if n == 0:
    return 1
  else:
    return n * Factorial(n - 1)


res = Factorial(5)
print("Result =", res)
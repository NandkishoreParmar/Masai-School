import math
def power2(n):
    # if n > 0 and (n & (n - 1)) == 0:  # Checks if n is a power of 2
    #     print("True")
    # else:
    #     print("False")
    power = 0
    temp = 0
    while temp < n:
      temp = math.pow(2,power)
      power += 1
      if temp == n:
        return True
    return False

# t = int(input())
# for _ in range(t):
#     n = int(input())
#     print(power2(n))
print(power2(2))
print(power2(3))

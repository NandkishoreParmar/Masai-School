
n = 5

num = 1

for i in range(n):
  for j in range(i+1):
    print(num,end=" ")
    num += 1
  print()


# 1 
# 2 3
# 4 5 6
# 7 8 9 10
# 11 12 13 14 15

print("reverse a loop")
num2 = 1
for i in range(n,-1,-1):
  for j in range(i):
    print(num2,end=" ")
    num2 += 1
  print()

# 1 2 3 4 5
# 6 7 8 9
# 10 11 12
# 13 14
# 15
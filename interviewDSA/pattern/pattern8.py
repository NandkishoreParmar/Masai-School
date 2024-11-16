

n = 5


for i in range(n):
  for j in range(i+1):
    if j%2==0:
      print("1",end=" ")
    else:
      print("0",end=" ")
  print()

# 1 
# 1 0
# 1 0 1
# 1 0 1 0
# 1 0 1 0 1

print("Reverse a loop")
for i in range(n,-1,-1):
  for j in range(i+1):
    if j%2==0:
      print("1",end=" ")
    else:
      print("0",end=" ")
  print()
# 1 0 1 0 1 0
# 1 0 1 0 1
# 1 0 1 0
# 1 0 1
# 1 0
# 1
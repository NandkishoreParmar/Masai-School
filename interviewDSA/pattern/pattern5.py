

n = 5

for i in range(1,n+1):
  for j in range(i):
    print(i,end=" ")
  print()


# 1 
# 2 2 
# 3 3 3 
# 4 4 4 4 
# 5 5 5 5 5 

print("Reverse loop")


for i in range(n,-1,-1):
  for j in range(i):
    print(i,end=" ")
  print()


# 5 5 5 5 5
# 4 4 4 4
# 3 3 3
# 2 2
# 1
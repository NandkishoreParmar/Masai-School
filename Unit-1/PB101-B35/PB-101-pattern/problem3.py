# Write a program to print a brick wall pattern of height H and width W. Each brick is represented by the symbol "[]" and each row of bricks is offset to create the typical brick wall pattern.


H = int(input())
W = int(input())

for i in range(H):
  for j in range(2*W):
    if i % 2 == 0:
      if j % 2 == 0:
        print("[ ]",end="")
      else:
        print(" ",end=" ")
    else:
      if j % 2 != 0:
        print("[ ]",end="")
      else:
        print(" ",end=" ")
  print()
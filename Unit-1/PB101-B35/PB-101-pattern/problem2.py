
# Write a program to print a pine tree pattern using asterisks *, with the trunk at the bottom centered relative to the tree.

Num = int(input())
mid = (Num*2) // 2
for i in range(Num):
  print(" " * (Num-i-1),end=" ")
  print("*" * (i + 1),end="")
  print("*" * i,end="")
  print()
print(" " * mid + "|"  )
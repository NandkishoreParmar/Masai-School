l1 = [  [10,20,30,40],
        [45,12,78,50],
        [96,85,23,60]
     ]
for i in l1:
    for j in i:
        print(j, end = " ")
    print()
print()
print()
for i in range(len(l1)):
    for j in range(len(l1)+1):
        print(l1[i][j],end = " ")
    print()
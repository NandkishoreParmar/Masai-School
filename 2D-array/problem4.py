l1 = [  [10,20,30,40],
        [45,12,78,50],
        [96,85,23,60],
        [98,90,25,70]
     ]

for i in range(len(l1)-1,-1,-1):
    for j in range(len(l1)-1,-1,-1):
        print(l1[j][i], end = " ")
    print()
print()
print()
for i in range(len(l1)-1,-1,-1):
    for j in range(len(l1)-1,-1,-1):
        print(l1[i][j], end = " ")
    print()

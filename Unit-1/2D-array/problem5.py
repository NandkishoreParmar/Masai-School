l1 = [  [10,20,30,40],
        [45,12,78,50],
        [96,85,23,60],
        [98,90,25,70]
     ]

for i in range(len(l1)):
    print(l1[i][0],end = " ")
print()
for i in range(len(l1)-1,0,-1):
    for j in range(1,len(l1)-1):
        if i + j == len(l1) - 1:
            print(l1[i][j], end = " ")
print()

for i in range(len(l1)):
    print(l1[i][len(l1)-1], end = " ")

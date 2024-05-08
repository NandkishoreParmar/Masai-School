l1 = [
       [1,2,3],
       [4,5,6],
       [7,8,9]
]

sum1 = 0
sum2 = 0
sum3 = 0
for i in range(len(l1)):
    for j in range(len(l1)):
        # print(l1[j][i])
        if i == 0:
            if l1[j][i] % 2 == 0:
                sum1 += l1[j][i]
        elif i == 1:
            if l1[j][i]  % 2 == 0:
                sum2 += l1[j][i]
        elif i == 2:
            if l1[j][i] % 2 == 0:
                sum3 += l1[j][i]
print(sum1)            
print(sum2)            
print(sum3)            



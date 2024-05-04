# 6
# arr1 = 1 2 2 3 4 5
# 6
# arr2 = 1 2 3 4 5 5

# arr1 = 1:1  2:2 3:1 4:1 5:1 
# arr2 = 1:1  2:2 3:1 4:1 5:2
# if arr1 keys and arr2 keys are same = print("yes")  else: print(No)

# output = Yes/No 

arr1 = [1,2,2,3,4,5]
arr2 = [1,2,3,4,5,5]

dic1 = {}
for i in arr1:
    if i in dic1:
        dic1[i] += 1
    else:
        dic1[i] = 1
newD1 = dic1.keys()

dic2 = {}
for j in arr2:
    if j in dic2:
        dic2[j] += 1
    else:
        dic2[j] = 1
newD2 = dic2.keys()

if newD1 == newD2:
    print("Yes")
else:
    print("No")

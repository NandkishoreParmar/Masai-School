print("Enter a number : ",end= " ")
num = int(input())
#  2, 3, 5, 7, 11

if num <= 1:
    print("false")
flag = True
for i in range(2,num):
    if num % i == 0:
        flag = False
if flag == True:
    print("Yes")
else:
    print("No")


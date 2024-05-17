# N = int(input())
# arr = []

# for i in range(N):
#     arr.append(int(input()))
# print(arr)

# 2 nd way 

# Num = int(input())
# arr1 = list(map(int,input().split()))
# print(arr1)

# 3   how to take input in 2D array

m,n = map(int,input().split())
arr = []
for i in range(m):
    arr.append(list(map(int,input().split())))
print(arr)
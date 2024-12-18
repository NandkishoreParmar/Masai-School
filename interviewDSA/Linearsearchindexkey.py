def search(n,k,arr):
  for i in range(n):
    if arr[i] == k:
      return i
  return -1
n,k = map(int,input().split())
arr = list(map(int,input().split()))
print(search(n,k,arr))

# 5 1
# 3 4 5 1 2


# 3
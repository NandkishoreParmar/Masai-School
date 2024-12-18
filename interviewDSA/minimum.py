def minimum(arr,n):
  mini = arr[0]
  for i in range(n):
    if mini > arr[i]:
      mini = arr[i]
  return mini


n = int(input())
arr = list(map(int,input().split()))
print(minimum(arr,n))
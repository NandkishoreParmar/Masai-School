
n = 6
A = [1,2,3,5,7,12]
total = 0
for i in range(n):
    for j in range(i+1,n):
        diff = j-i
        count = 0
        for k in range(1,diff+1):
            # prime --> 1 and itself
            if (diff % k == 0):
                count += 1
        if count == 2:
            total = total + (A[j] - A[i])
print(total)
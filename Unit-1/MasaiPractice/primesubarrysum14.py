# //Enter code here
t = int(input())
for _ in range(t):
    N = int(input())
    arr = list(map(int,input().split()))
    
    def check_prime(Num):
        if Num <= 1:
            return False
        if Num == 2:
            return True
        if Num % 2 == 0:
            return False
            
        for i in range(3,int(Num**0.5)+1,2):
            if Num % i == 0:
                return False
        return True
    
    def maxlength(arr):
        n = len(arr)
        maxlen = -1
        for i in range(n):
            cur_sum = 0
            for j in range(i,n):
                cur_sum += arr[j]
                if check_prime(cur_sum):
                    maxlen = max(maxlen,j-i + 1)
                    
        return maxlen
        
    print(maxlength(arr))
    
    


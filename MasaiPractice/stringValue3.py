def solve(S):
    summ = 0
    for i in range(len(S)):
        summ += ord(S[i]) - ord('a') + 1
    
    print(summ)

S = "aba"
solve(S)

# output = 1+2+1 = 4
  

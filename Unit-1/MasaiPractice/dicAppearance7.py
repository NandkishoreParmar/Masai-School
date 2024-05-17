def solve(N, arr):
    dic1 = {}
    for i in arr:
        if i in dic1:
            dic1[i] += 1
        else:
            dic1[i] = 1
    valsum = 0
    for key,values in dic1.items():
        if values == 1:
            valsum += key
    print(valsum)
N = 7
arr = [3, 5, 3, 3, 8, 5, 6]      # 8 + 6 = 14
solve(N,arr)                    #  unique element sum
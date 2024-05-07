
N = 30
s ="abc"
summ = 0
dic = {}
for i in range(0,26):
    for j in range(i,26):
        dic [chr(ord('a') + i)] = N + i
for i in s:
    for key,value in dic.items():
        if key == i:
            summ += value
print(summ)

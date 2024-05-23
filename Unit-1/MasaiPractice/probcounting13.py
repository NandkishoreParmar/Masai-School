string = input()
sor = sorted(string)
dic = {}
for i in range(len(sor)):
    if sor[i] in dic:
        dic[sor[i]] += 1
    else:
        dic[sor[i]] = 1
# print(dic)
for char , key in dic.items():
    print(char, key)
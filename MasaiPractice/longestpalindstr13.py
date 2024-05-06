


# string = "thisisracecargood"
# max1 = 0
# for i in range(len(string)):
#     bag = ""
#     for j in range(i+1,len(string)):
#         bag += string[j]
        
#         rev = ""
#         for k in range(len(bag)-1,-1,-1):
#             rev += bag[k]
#         if bag == rev:
#             if len(bag) > max1:
#                 max1 = len(bag)
#                 big = bag
# print(max1)
# print(big)

st = "thisisracecargood"
max1 = 0    #min = len(st)
for i in range(len(st)):
    for j in range(i+1,len(st)+1):
        sub = st[i:j]   
        rev = ''
        for k in range(len(sub)-1,-1,-1):
            rev += sub[k]
            # print(rev)
        if rev == sub:
            if len(sub) > max1:    #   len(sub) < min
                max1 = len(sub)
                big = sub
print(big)
print(max1)
                
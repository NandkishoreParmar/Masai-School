# map 
# li = [2,4,1,6,8,7]

# for i in range(len(li)):
#     li[i] = li[i] * 2
# print(li)

def multiple_2(n):
    output = 2*n
    return output

li = [2,4,1,6,8,7]
ans = list(map(multiple_2,li))     # we use map here 
print(ans)
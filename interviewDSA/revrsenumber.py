
def reverseNum(num):
    n = num
    rev = 0
    while num != 0:
        lastdigit = num % 10
        rev = (rev * 10) + lastdigit
        num = num // 10
    print(rev)

reverseNum(123301)

def rev(num):
    strr = str(num)
    rev = ""
    for i in range(len(strr)-1,-1,-1):
        rev += strr[i]
    print(type(rev))
    n = int(rev)
    # num(rev)
    print(type(n))
    print(n)
rev(1234)
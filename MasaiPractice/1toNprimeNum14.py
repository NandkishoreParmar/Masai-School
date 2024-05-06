def isprime(num):
    isFlag = True
    if num <= 1:
        # print("Not prime")
        isFlag = False
    else:
        for i in range(2,num):
            if num % i == 0:
                isFlag = False
                
    return isFlag

def printnuum(num):
    for i in range(1,num):
        if isprime(i):
            print(i, end = " ")
  
num = 100          
printnuum(num)
    # if isFlag:
    #     print("Num is prime")
    # else:
    #     print("Not a prime")

def prime(n):
    isprime = True
    if n <= 1:
        isprime = False
    else:
        for i in range(2,n-1):
            if n % i == 0:
                isprime = False
    
    if isprime:
        # print("prime")
        return True
    else:
        # print("not prime")
        return False

def primeRange(n):
    for i in range(n):
        if prime(i):
            print(i, end = " ,")

primeRange(100)
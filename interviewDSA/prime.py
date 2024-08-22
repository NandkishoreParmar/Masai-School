num = 3

def isprime(num):
    isprime = True
    if num <= 1:
        isprime = False
    else:
        for i in range(2,num-1):
            if num % i == 0:
                isprime =  False
    if isprime:
        print("Num is prime")
    else:
        print("Num is not a prime")
isprime(num)
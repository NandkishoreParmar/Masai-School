num = 5
fact = 1

for i in range(1,num+1):
    fact = fact * i

print(fact)


def factorial(num):
    if num == 0:
        return 1
    else:
        return num*factorial(num-1)

print(factorial(num))
N = 5

for i in range(1,N+1):
    for space in range(i,N):
        print(" ", end = " ")
    for num in range(i,0,-1):
        print(num, end = " ")
    for j in range(2,i+1):
        print(j, end = " ")
    print()
for i in range(1,N):
    for space in range(i):
        print(" ", end = " ")
    for num in range(N-i,0,-1):
        print(num, end = " ")
    for j in range(2,N-i+1):
        print(j, end = " ")
    print()

    
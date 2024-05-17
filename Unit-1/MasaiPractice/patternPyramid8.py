
N = 5
for i in range(N):
    for space in range(1,N-i):
        print(" ", end = " ")
    for star in range(i+1):
        print(" * ", end = " ")
    print()
for i in range(1,N):
    for space in range(i):
        print(" " , end = " ")
    for star in range(i,N):
        print(" * ", end = " ")
    print()
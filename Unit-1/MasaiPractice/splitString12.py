
string = "Hello world"

arr = string.split(" ")

for el in arr:
    for i in range(len(el)-1,-1,-1):
        print(el[i], end="")
    print(end= " ")
    
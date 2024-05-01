def solve(string):
    rev = ""
    for i in range(len(string)):
        if string[i] == "#" and i > 0:
            rev = rev[:-1]
        elif string[i] != "#":
            rev += string[i]
    print(rev)

string = "ab#d"   #//  "a#bc"
solve(string)

# output = ad   # bc


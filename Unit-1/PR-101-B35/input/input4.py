

# mulltiline input 

# 5
# 1 2 3 4 5
no_of_lines = int(input(" Enter no. of lines: "))

lines = [input() for _ in range(no_of_lines)]
size = lines[0]   # first index of arr
el = lines[1].strip().split(" ") # second index input in array
ans = [int(num) for num in el]

print(size, el)
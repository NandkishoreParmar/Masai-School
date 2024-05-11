# using map  multiline input

no_of_lines = int(input("Enter the number of lines: "))

lines = [input() for _ in range(no_of_lines)]

numbers = list(map(int, lines[1].strip().split()))

print(numbers)

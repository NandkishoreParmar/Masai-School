
# single line input 
num = input("Enter a number : ")

print(num)

inputnum = num.strip().split(" ")
print(inputnum)     # string list

intlist = [int(num) for num in inputnum]

print(intlist)
# //Enter code here
# Take input as a single line of numbers
numbers = input()  #"Enter numbers separated by space: "

# Split the input string into a list of numbers
numbers_list = numbers.split()

# Convert the numbers from string to int and add 1 to each
modified_numbers = [int(num) + 1 for num in numbers_list]

# Print the modified numbers on separate lines
for num in modified_numbers:
    print(num)



# input = 1 2 3 4
#output = 2
      #   3
      #   4
      #   5
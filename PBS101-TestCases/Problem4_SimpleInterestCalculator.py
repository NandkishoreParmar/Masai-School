

# take a three input from user 

Principal = int(input("Enter the principle :"))
Rate = int(input("Enter the rate :"))
Time = int(input("Enter the time :"))

#calculate simple
si = Principal*Rate*Time/100
if Principal < 0  or Rate < 0 or Time < 0:
    print("Invalid input, all values must be non-negative.")
else:
    print("The simple interest is: ",si)

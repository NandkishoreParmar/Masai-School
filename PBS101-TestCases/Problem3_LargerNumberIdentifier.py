# let's take two input from user 
number1 = int(input("Enter first number:"))
number2 = int(input("Enter second number:"))

if number1 == number2:    # check number1 and number2 is equal or not 
    print("Both numbers are equal")
elif number1 < number2:   # number2 is greater than number1
    print(number2," is larger than ", number1)
elif -number1 < -number2:   
    print(number1," is larger than ", number2)




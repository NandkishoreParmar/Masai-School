
# first we take two input from user 
weight = int(input("Enter weight:"))
height = float(input("Enter height:"))

# check height and weight is not less than zero
if weight < 0 or height < 0:
    print("Invalid input, height and weight must be positive numbers.")
elif height == 0:   
    print("Invalid input, height cannot be zero.")
else:
    Bmi = weight/(height*height)   # calculate bmi
    print("Your BMI is: ",round(Bmi,2))
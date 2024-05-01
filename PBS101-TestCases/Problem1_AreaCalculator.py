
# first we take two variable 
base = int(input("Enter base of Triangle: "))   # 0, 8
height = int(input("Enter height of Triangle: "))    #15, 0

# calculate  area of triangle and number is not less than 0
if base < 0  or height < 0:
    print("Invalid value")
else:
    Area_of_triangle = base * height/2
    #print the final output in float 
    print("The area of triangle is :",float(Area_of_triangle))



# take a input from user 
price = int(input("Enter price:$"))

if price < 0:   # check num is not less than 0
    print("Invalid input, the price must be a non-negative number.")
elif price > 20:   # if price is greater than 20 
    discount = price*0.9
    print("The final price of the item is:",discount)
elif price == 20  or price < 20: # if price is equal to 20 or less than 20 
    print("The final price of the item is:",price)


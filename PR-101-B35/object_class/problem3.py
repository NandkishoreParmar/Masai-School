# Problem 3 : Carpet Company
# # The Carpet Company has requested an application to calculate the price of carpeting for rectangular rooms.
#  The cost is determined by multiplying the area of the floor (width * length) by the carpet's price per square
#  meter.

# # 1. Write a class named Floor. This class should have two fields (instance variables) named width and length,
#  both of type float.

# # The class should have one constructor accepting parameters width and length, both of type float, to initialize
#  the fields. If the width or length is less than 0, its value should be set to 0.

# # Implement the following method:
# # * A method named get_area without any parameters, it needs to return the area of the floor (width * length).

# # 2. Write a class named Carpet. This class should have one field (instance variable) named cost, of type float.

# # The class should have one constructor with a parameter cost of type float to initialize the field. If the cost
#  is less than 0, it should be set to 0.

# # Implement the following method:
# # * A method named get_cost without any parameters, it needs to return the value of the cost field.

# # 3. Write a class named Calculator. This class should have two fields (instance variables) named floor of type 
# Floor and carpet of type Carpet.

# # The class should have one constructor accepting parameters floor of type Floor and carpet of type Carpet to 
# initialize the fields.

# # Implement the following method:
# # * A method named get_total_cost without any parameters, it calculates and returns the total cost to cover the 
# floor with the carpet.

# # TEST EXAMPLE

# # → TEST CODE:

# carpet = Carpet(3.5)
# floor = Floor(2.75, 4.0)
# calculator = Calculator(floor, carpet)
# print("total= ", calculator.get_total_cost())
# carpet = Carpet(1.5)
# floor = Floor(5.4, 4.5)
# calculator = Calculator(floor, carpet)
# print("total= ", calculator.get_total_cost())

# # → OUTPUT

# total= 38.5
# total= 36.45

# # NOTE: This problem requires you to write 3 classes.
class Floor:
    def __init__(self, width, length):
        self.width = max(0, width)
        self.length = max(0, length)

    def get_area(self):
        return self.width * self.length


class Carpet:
    def __init__(self, cost):
        self.cost = max(0, cost)

    def get_cost(self):
        return self.cost


class Calculator:
    def __init__(self, floor, carpet):
        self.floor = floor
        self.carpet = carpet

    def get_total_cost(self):
        return self.floor.get_area() * self.carpet.get_cost()

carpet = Carpet(3.5)
floor = Floor(2.75, 4.0)
calculator = Calculator(floor, carpet)
print("total= ", calculator.get_total_cost())

carpet = Carpet(1.5)
floor = Floor(5.4, 4.5)
calculator = Calculator(floor, carpet)
print("total= ", calculator.get_total_cost())

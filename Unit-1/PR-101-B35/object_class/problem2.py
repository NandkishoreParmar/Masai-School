# Problem 2 : 2D Space
# # You need to represent a point in a 2D space. Write a class named Point. The class should have 
# two fields (instance variables) named x and y, both of type int.

# # The class should include two constructors:
# # 1. A no-argument constructor that initializes x and y to 0.
# # 2. A constructor that accepts two parameters, x and y, both of type int, and initializes the 
# respective fields with these values.

# # Implement the following methods (instance methods):
# # * A method named get_x that takes no parameters and returns the value of the x field.
# # * A method named get_y that takes no parameters and returns the value of the y field.
# # * A method named set_x that takes one parameter of type int and sets the value of the x field.
# # * A method named set_y that takes one parameter of type int and sets the value of the y field.
# # * A method named distance with no parameters, it calculates and returns the distance between this Point 
# and Point (0,0) as a float.
# # * A method named distance with two parameters, x and y both of type int, it calculates and returns the 
# distance between this Point and another Point defined by these parameters as a float.
# # * A method named distance with one parameter of type Point, it calculates and returns the distance between 
# this Point and the given Point as a float.

# # The distance between two points (x1, y1) and (x2, y2) is determined by the formula: sqrt((x2 - x1)^2 + 
# (y2 - y1)^2)

# # TEST EXAMPLE

# # → TEST CODE:

# first = Point(6, 5)
# second = Point(3, 1)
# print("distance(0,0)= ", first.distance())
# print("distance(second)= ", first.distance(second))
# print("distance(2,2)= ", first.distance(2, 2))
# point = Point()
# print("distance()= ", point.distance())

# # → OUTPUT:

# distance(0,0)= 7.810249675906654
# distance(second)= 5.0
# distance(2,2)= 5.0
# distance()= 0.0

# # NOTE: Use math.sqrt to calculate the square root √.
import math

class Point:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    def get_x(self):
        return self.x

    def get_y(self):
        return self.y

    def set_x(self, x):
        self.x = x

    def set_y(self, y):
        self.y = y

    def distance(self, x=None, y=None):
        if x is None and y is None:
            x, y = 0, 0
        if isinstance(x, Point):
            return math.sqrt((self.x - x.x)**2 + (self.y - x.y)**2)
        return math.sqrt((self.x - x)**2 + (self.y - y)**2)

first = Point(6, 5)
second = Point(3, 1)
print("distance(0,0)= ", first.distance())
print("distance(second)= ", first.distance(second))
print("distance(2,2)= ", first.distance(2, 2))
point = Point()
print("distance()= ", point.distance())


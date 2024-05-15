# Problem 1 : Wall
# # Write a class named Wall. The class should have two fields (instance variables) named width and height, 
# both of type float.

# # The class should include two constructors:
# # 1. A no-argument constructor that initializes the width and height to 0.0.
# # 2. A constructor that accepts two parameters, width and height, both of type float. 
# This constructor should initialize the respective fields with these parameters. However, if the width
#  or height is less than 0, their value should be set to 0.0 instead.

# # Implement the following methods (instance methods):
# # * A method named get_width that takes no parameters and returns the value of the width field.
# # * A method named get_height that takes no parameters and returns the value of the height field.
# # * A method named set_width that takes one parameter of type float and sets the value of the width field.
#  If the parameter is less than 0, the width should be set to 0.0.
# # * A method named set_height that takes one parameter of type float and sets the value of the height field.
#  If the parameter is less than 0, the height should be set to 0.0.
# # * A method named get_area that calculates and returns the area of the wall (width * height) without any 
# parameters.

# # TEST EXAMPLE

# # → TEST CODE:

# wall = Wall(5, 4)
# print("area= ", wall.get_area())
# wall.set_height(-1.5)
# print("width= ", wall.get_width())
# print("height= ", wall.get_height())
# print("area= ", wall.get_area())

# # → OUTPUT:

# area= 20.0
# width= 5.0
# height= 0.0
# area= 0.0

class Wall:
    def __init__(self, width=0.0, height=0.0):
        self.width = max(0.0, width)
        self.height = max(0.0, height)

    def get_width(self):
        return self.width

    def get_height(self):
        return self.height

    def set_width(self, width):
        self.width = max(0.0, width)

    def set_height(self, height):
        self.height = max(0.0, height)

    def get_area(self):
        return self.width * self.height

wall = Wall(5, 4)
print("area= ", wall.get_area())
wall.set_height(-1.5)
print("width= ", wall.get_width())
print("height= ", wall.get_height())
print("area= ", wall.get_area())

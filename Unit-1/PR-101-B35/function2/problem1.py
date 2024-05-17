# Write a function named distance that takes the x and y coordinates of two points and returns the distance between them.

# Sample Input: (2, 3), (5, 7);

# Sample Output: 5.0

import math

def distancefind(x1, y1, x2, y2):
  print( math.sqrt((x2 - x1)**2 + (y2 - y1)**2))


distancefind(2, 3, 5, 7)
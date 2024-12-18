# def addNumbers(nA, arrA, nB, arrB):
#     """
#     This function takes two arrays of digits representing two numbers, adds them, 
#     and returns the resulting array of digits along with its size.
    
#     Args:
#     nA (int): Size of the first array (number1).
#     arrA (list): Digits of the first number.
#     nB (int): Size of the second array (number2).
#     arrB (list): Digits of the second number.
    
#     Returns:
#     tuple: A tuple containing the size of the resulting array (nSum) and the resulting array (arrSum).
#     """
#     # Convert digit arrays to integer numbers
#     number1 = int(''.join(map(str, arrA)))
#     number2 = int(''.join(map(str, arrB)))
#     # print(number1)
#     # print(type(number1))
#     # print(number2)
#     # Calculate the sum of the numbers
#     sum_result = number1 + number2
#     print("sum" ,sum_result)
    
#     # Convert the sum back into a list of digits
#     arrSum = list(map(int, str(sum_result)))
    
#     # Get the size of the resulting array
#     nSum = len(arrSum)
    
#     return nSum, arrSum

# # Example 1
# nA, arrA = 3, [1, 2, 3]
# nB, arrB = 3, [3, 4, 5]
# nSum, arrSum = addNumbers(nA, arrA, nB, arrB)
# # print(f"Output:\nThird group: sum={''.join(map(str, arrSum))}, returned as nSum={nSum}, arrSum={arrSum}")

# # Example 2
# nA, arrA = 2, [1, 2]
# nB, arrB = 2, [8, 8]
# nSum, arrSum = addNumbers(nA, arrA, nB, arrB)
# print(nSum,arrSum)
# # print(f"Output:\nThird group: sum={''.join(map(str, arrSum))}, returned as nSum={nSum}, arrSum={arrSum}";


arr1 = [2,3,4]
arr2 = [1,3,2]

num1 = int(''.join(map(str,arr1)))
num2 = int(''.join(map(str,arr2)))

sumRes = num1 + num2

print(sumRes)

arrsum = list(map(int,str(sumRes)))
print(arrsum)

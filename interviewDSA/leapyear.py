
def leap(year):
    if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
        print("Leap Year")

    else:
        print("not a leap year ")
leap(2016)
leap(2015)
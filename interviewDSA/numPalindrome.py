def numPalindrome(num):
    n = num
    rev = 0
    while num != 0:
        lastdigit = num % 10
        rev = (rev * 10) + lastdigit
        num = num // 10
    if n == rev:
        print( n," is a palindrome")
    else:
        print(n," is not a palindrome")

numPalindrome(12212)
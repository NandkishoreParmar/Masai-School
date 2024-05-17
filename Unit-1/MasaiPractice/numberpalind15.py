



num = 12345432

n = num
rev = 0
while num != 0:
    last = num % 10
    rev = rev * 10 + last
    num = num // 10

print("reverse number is ", rev)
if n == rev:
    print("palindrome")
else:
    print("Not Palindrome")
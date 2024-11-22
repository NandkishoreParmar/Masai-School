s = "the sky is blue"
 
words = s.split()
# print(words)
rev = []
for i in range(len(words)-1,-1,-1):
  rev.append(words[i])
  if i != 0:
    rev.append(" ")
print("".join(rev))
# print(rev)
print("Two pointer approach")
word = s.split()

left ,right = 0, len(word)-1

while left < right:
  word[left],word[right] = word[right],word[left]
  left += 1
  right -= 1
print(" ".join(word))
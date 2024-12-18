
def FreqCount(s):
  freq = {}
  for char in s:
    if char in freq:
      freq[char] += 1
    else:
      freq[char] = 1
  return freq

s = "aabbccd"
# print(FreqCount(s))

ans = FreqCount(s)
for key,value in ans.items():
  # print(key , "->",value)
  print(key,end=" ")
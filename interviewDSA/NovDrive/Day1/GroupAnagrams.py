# from collections import defaultdict

strs = ["eat","tea","tan","ate","nat","bat"]
# anagram_map = defaultdict(list)
        
# for word in strs:
#   sorted_word = ''.join(sorted(word))
#   anagram_map[sorted_word].append(word)
        
# print(list(anagram_map.values()))

anagram = {}
for word in strs:
  sorted_word = "".join(sorted(word))
  # print(sorted_word)
  if sorted_word in anagram:
    anagram[sorted_word].append(word)
  else:
    anagram[sorted_word] = [word]
print(list(anagram.values()))
def solve(S,K):
    # # encry = "-,.%"
    # for i in range(len(S)):
    #     if S[i].isalpha():
    #         num = (ord(S[i])+ K) 
    #          char = chr(num)
    #         print(char, end = "")
    #     elif S[i].isdigit():
    #         char = str((int(S[i])+ K) % 10 )
    #         # char1 = chr(char)
    #         print(char,end ="")
            
            
            
    #     else:
    #         char = S[i]
    #         print(char,end="")
     for i in range(len(S)):
        if S[i].isalpha():
            if S[i].islower():
                num = (ord(S[i]) - ord('a') + K) % 26 + ord('a')
            else:
                num = (ord(S[i]) - ord('A') + K) % 26 + ord('A')
            char = chr(num)
            print(char, end="")
        elif S[i].isdigit():
            char = str((int(S[i]) + K) % 10)
            print(char, end="")
        else:
            char = S[i]
            print(char, end="")
  
S = "All-convoYs-9-be:Alert1."
K = 4
solve(S,K)
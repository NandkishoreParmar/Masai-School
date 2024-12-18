def balanced(s, n):
    st = []
    for i in range(n):
        ch = s[i]
        if ch == '(' or ch == '[' or ch == '{':
            st.append(ch)
        else:
            if len(st) == 0:
                return False
            temp = st.pop()
            if ch == ']' and temp != '[':
                return False
            if ch == ")" and temp != '(':
                return False
            if ch == "}" and temp != '{':
                return False
    return len(st) == 0

s = "[(){}()]"
n = len(s)
print(balanced(s, n))

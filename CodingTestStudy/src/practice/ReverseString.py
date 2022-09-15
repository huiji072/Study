s = input()

isAlpha = []
isNum = []

for i in range(len(s)):
    if s[i].isalpha():
        isAlpha += s[i]
    else:
        isNum += s[i]
        
isAlpha.sort()
isNum.sort()

result = isAlpha + isNum

print(''.join(result))         


 
data = input()

isAlpha = []
isNum = []

for i in data:
    if i.isalpha():
        isAlpha.append(i)
    else:
        isNum.append(i)
        

isAlpha.sort()
isNum.sort()

result = isAlpha + isNum

print(''.join(result))

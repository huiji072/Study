data = 'fasdf3243fa'

print(data)

isAlpha = []
isNum = []
for x in data:
    if x.isalpha():
        isAlpha.append(x)
    else:
        isNum.append(x)
        
isAlpha.sort()
isNum.sort()

result = isAlpha + isNum

print(''.join(result))
# 구현3

s = input()
data = []
result = []

for i in range(len(s)):
    data.append(s[i])
    
data.append(' ')
temp = []
temp2 = 100001
for i in range(len(data)):
    temp.append(data[i])
    if data[i] == '<':
        temp.pop()
        result.append(temp[::-1])
        temp2 = i
    elif data[i] == '>':
        result.append(data[temp2:i+1])
        temp2 = 100001
        temp = []
    elif data[i] == ' ':
        if temp2 == 100001:
            temp.pop(len(temp)-1)
            result.append(temp[::-1])
            result.append(' ')
            temp = []
    

for i in result:
    print(''.join(i), end='')
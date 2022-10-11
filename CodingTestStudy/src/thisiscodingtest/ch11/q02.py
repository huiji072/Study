# s = input()

s = "02984"

data = []

for i in range(len(s)):
    data.append(int(s[i]))

result = 0

for i in range(len(s)):
    if result == 0:
        result += data[i]
    else:
        result *= data[i]
        
print(result)
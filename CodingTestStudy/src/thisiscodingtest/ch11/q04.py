n = 5
data= [3, 2, 1, 1, 9]

data = sorted(data)

result = 1

for i in data:
    if result < i:
        break
    result += i
print(result)


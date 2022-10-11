n = 5
data= [3, 2, 1, 1, 9]

data = sorted(data)

result = 1

for i in range(len(data)):
    if data[i] > result:
        break
    result += data[i]
    
print(result)
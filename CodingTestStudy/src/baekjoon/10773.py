k = int(input())

data = []

for i in range(k):
    data.append(int(input()))

result = []

for i in range(k):
    if data[i] != 0:
        result.append(data[i])
    else:
        result.pop()
        
print(sum(result))

# 구현1
n = 4
data = [1, 3, 1, 5]

result = [0] * 101

result[0] = data[0]
result[1] = data[1]

for i in range(2, n):
    result[i] = max(result[i-2]+data[i], result[i-1])
    
print(result[n-1])



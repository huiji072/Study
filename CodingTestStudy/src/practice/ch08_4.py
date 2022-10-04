n = 3

data = [0] * 1001

data[0] = 0
data[1] = 1
data[2] = 3

for i in range(3, n+1):
    data[i] = data[i-1] + (data[i-2] * 2)
    
print(data[n])
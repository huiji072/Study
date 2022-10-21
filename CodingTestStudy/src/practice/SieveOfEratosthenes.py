import math


n = 10

data = [True for _ in range(n+1)]

for i in range(2, int(math.sqrt(n))+1):
    if data[i] == True:
        j = 2
        while i * j <= n:
            data[i*j] = False
            j += 1
            
for i in range(2, n+1):
    if data[i]:
        print(i, end=' ')
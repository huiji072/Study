import math

n, k = map(int, input().split())

data = [True] * (n+1)

temp = 0
for i in range(2, n + 1):
    for j in range(i, n+1, i):
        if data[j] == True:
            data[j] = False
            temp += 1
            if temp == k:
                print(j)
                break
            
# 구현2
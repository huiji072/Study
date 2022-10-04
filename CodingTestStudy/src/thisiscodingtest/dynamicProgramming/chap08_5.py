# n, m = int(input())
# data = []
# for i in range(n):
#     data = int(input())
    
n, m = 3, 7
coin = [2, 3, 5]

data = [10001] * (m+1)


for i in range(n):
    for j in range(2, m+1):
        if j % coin[i] == 0:
            data[j] = j // coin[i]
        else:
            data[j] = min(data[j-coin[i]] + 1, data[j])
            
if data[m] == 10001:
    print("-1")
else:
    print(data[m])
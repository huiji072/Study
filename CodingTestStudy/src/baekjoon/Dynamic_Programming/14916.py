n = int(input())

d = [1000001] * (n+1)
d[0] = 0

coin = [2, 5]

for i in range(2):
    for j in range(coin[i], n+1):
        d[j] = min(d[j], d[j-coin[i]] + 1)

if d[n] == 1000001:
    print(-1)
else:
    print(d[n])
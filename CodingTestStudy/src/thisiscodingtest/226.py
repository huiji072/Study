n, m = map(int, input().split())

coin = []
for _ in range(n):
    coin.append(int(input()))

d = [10001] * (m+1)

d[0] = 0

for i in range(n):
    for j in range(coin[i], m+1):
        d[j] = min(d[j], d[j-coin[i]] + 1)

if d[m] != 10001:
    print(d[m])
else:
    print(-1)
    
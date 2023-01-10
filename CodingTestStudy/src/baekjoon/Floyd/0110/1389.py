import sys
input = sys.stdin.readline

INF = sys.maxsize

n, m = map(int, input().split())

rs = [[INF] * (n+1) for _ in range(n+1)]

for i in range(1, n+1):
    rs[i][i] = 0

for _ in range(m):
    a, b = map(int, input().split())
    rs[a][b] = 1
    rs[b][a] = 1

for k in range(1, n+1):
    for j in range(1, n+1):
        for i in range(1, n+1):
            if rs[j][i] > rs[j][k] + rs[k][i]:
                rs[j][i] = rs[j][k] + rs[k][i]
                # rs[i][j] = rs[j][i]

result = []
sum = 0
for j in range(1, n+1):
    sum = 0
    for i in range(1, n+1):
        if rs[j][i] != INF:
            sum += rs[j][i]
    result.append(sum)


print(result.index(min(result))+1)

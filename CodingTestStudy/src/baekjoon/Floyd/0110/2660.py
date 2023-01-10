from itertools import count
import sys
input = sys.stdin.readline

INF = sys.maxsize

n = int(input())

rs = [[INF] * (n+1) for _ in range(n+1)]

while True:
    a, b = map(int, input().split())
    if a == b == -1:
        break
    rs[a][b] = 1
    rs[b][a] = 1

for i in range(1, n+1):
    rs[i][i] = 0

for k in range(1, n+1):
    for j in range(1, n+1):
        for i in range(1, n+1):
            if rs[j][i] > rs[j][k] + rs[k][i]:
                rs[j][i] = rs[j][k] + rs[k][i]

result = []
for i in range(1, n+1):
    result.append(max(rs[i][1:]))

score = min(result)
candidate = result.count(min(result))

print(score, candidate)

for i in range(len(result)):
    if result[i] == score:
        print(i+1, end=' ')

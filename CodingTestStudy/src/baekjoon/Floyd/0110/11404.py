import sys
input = sys.stdin.readline

INF = sys.maxsize

n = int(input())
m = int(input())

rs = [[INF] * (n+1) for _ in range(n+1)]
for i in range(1, n+1):
    rs[i][i] = 0

for _ in range(m):
    a, b, c = map(int, input().split())
    rs[a][b] = min(rs[a][b], c)

for k in range(1, n+1): #거치는 값
    for j in range(1, n+1): #시작 값
        for i in range(1, n+1): #끝나는 값
            if rs[j][i] > rs[j][k] + rs[k][i]:
                rs[j][i] = rs[j][k] + rs[k][i]

for j in range(1, n+1):
    for i in range(1, n+1):
        if rs[j][i] == INF:
            print(0, end=' ')
        else:
            print(rs[j][i], end=' ')
    print()
# c의 값이 0이면 0, 그 외에 1

import sys
input = sys.stdin.readline

INF = sys.maxsize

n = int(input())

rs = []
for _ in range(n):
    rs.append(list(map(int, input().split())))

for k in range(n):
    for j in range(n):
        for i in range(n):
            if rs[j][k] and rs[k][i]:
                rs[j][i] = 1

for i in range(n):
    print(*rs[i])
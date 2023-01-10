import sys
input = sys.stdin.readline

INF = sys.maxsize

n, m = map(int, input().split())

land = []
for _ in range(n):
    land.append(list(map(int, input().split())))


for k in range(n): #거치는 값
    for i in range(n): #시작 값
        for j in range(n): #도착 값
            if land[i][j] > land[i][k] + land[k][j]:
                land[i][j] = land[i][k] + land[k][j]

for i in range(m):
    a, b, c = map(int, input().split())
    if land[a-1][b-1] <= c:
        print("Enjoy other party")
    else:
        print("Stay here")
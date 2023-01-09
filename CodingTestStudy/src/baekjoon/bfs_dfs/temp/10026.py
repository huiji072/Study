from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
graph = []
for _ in range(n):
    str = input()
    graph.append(list(str))


dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

answer = []

def bfs(x, y, target):
    visited[x][y] = True

    queue = deque()
    queue.append([x, y])
    count = 1

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0<=nx<n and 0<=ny<n and not visited[nx][ny]:
                if graph[nx][ny] == target:
                    visited[nx][ny] = True
                    count += 1
                    queue.append([nx, ny])
    
    return count

result = []
visited = [[False] * n for _ in range(n)]
for i in range(n):
    for j in range(n):
        if visited[i][j] == False and graph[i][j] == 'R':
            r = bfs(i, j, 'R')
            result.append(r)
answer.append(len(result))

result = []
visited = [[False] * n for _ in range(n)]
for i in range(n):
    for j in range(n):
        if visited[i][j] == False and graph[i][j] == 'G':
            r = bfs(i, j, 'G')
            result.append(r)
answer.append(len(result))

result = []
visited = [[False] * n for _ in range(n)]
for i in range(n):
    for j in range(n):
        if visited[i][j] == False and graph[i][j] == 'B':
            r = bfs(i, j, 'B')
            result.append(r)
answer.append(len(result))

print(sum(answer), end=' ')

if answer[0] >= answer[1]:
    print(answer[0]+answer[1])
else:
    print(answer[2]+answer[1])


from collections import deque
import sys

input = sys.stdin.readline

m, n = map(int, input().split())

graph = []
for _ in range(n):
    str = input()
    graph.append(list(str))

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]


def bfs(x, y, target):
    
    queue = deque()
    queue.append([x, y])
    count = 0

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0<=nx<n and 0<=ny<m:
                if graph[nx][ny] == target and visited[nx][ny] == False:
                    visited[nx][ny] = True
                    count += 1
                    queue.append([nx, ny])
    return count


visited = [[False] * m for _ in range(n)]
result = []
for i in range(n):
    for j in range(m):
        if graph[i][j] == 'W' and visited[i][j] == False:
            count = bfs(i, j, 'W')
            result.append(count)


answer = 0
for i in range(len(result)):
    if result[i] == 0:
        answer += 1
    else:
        answer += result[i]**2

print(answer, end=' ')

visited = [[False] * m for _ in range(n)]
result = []
for i in range(n):
    for j in range(m):
        if graph[i][j] == 'B' and visited[i][j] == False:
            count = bfs(i, j, 'B')
            result.append(count)

answer = 0
for i in range(len(result)):
    if result[i] == 0:
        answer += 1
    else:
        answer += result[i]**2
        
print(answer)
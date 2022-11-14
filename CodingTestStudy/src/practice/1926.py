from collections import deque


n, m = map(int, input().split())

graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

visited = [[False] * m for _ in range(n)]

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

def bfs(x, y):
    queue = deque()
    queue.append([x, y])
    visited[x][y] = True
    count = 1

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0<=nx<n and 0<=ny<m:
                if not visited[nx][ny] and graph[nx][ny] == 1:
                    visited[nx][ny] = True
                    count += 1
                    queue.append([nx, ny])
    return count

result = []
for i in range(n):
    for j in range(m):
        if not visited[i][j] and graph[i][j] == 1:
            count = bfs(i, j)
            result.append(count)

print(len(result))
print(max(result))

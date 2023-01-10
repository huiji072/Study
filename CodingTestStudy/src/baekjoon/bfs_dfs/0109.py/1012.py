from collections import deque

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

answer = []

t = int(input())

for _ in range(t):

    m, n, k = map(int, input().split())
    graph = [[0] * m for _ in range(n)]

    for _ in range(k):
        a, b = map(int, input().split())
        graph[b][a] = 1

    visited = [[False] * m for _ in range(n)]

    count = 0
    def bfs(x, y):
        queue = deque()
        queue.append([x, y])
        count = 0
        visited[x][y] = True

        while queue:
            x, y = queue.popleft()
            
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]

                if 0<=nx<n and 0<=ny<m:
                    if not visited[nx][ny] and graph[nx][ny] == 1:
                        count += 1
                        visited[nx][ny] = True
                        queue.append([nx, ny])
        return count
    result = []
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1 and not visited[i][j]:
                result.append(bfs(i, j))

    answer.append(len(result))

print(*answer)
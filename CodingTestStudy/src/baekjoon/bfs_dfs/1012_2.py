from collections import deque

T = int(input())

answer = []
for t in range(T):
    m ,n, k = map(int, input().split())

    graph = [[0] * m for _ in range(n)]

    for _ in range(k):
        x, y = map(int, input().split())
        graph[y][x] = 1

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
                    if graph[nx][ny] == 1 and visited[nx][ny] == False:
                        visited[nx][ny] = True
                        count += 1
                        queue.append([nx, ny])

        return count

    result = []
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1 and visited[i][j] == False:
                result.append(bfs(i, j))
    answer.append(len(result))

print(*answer)
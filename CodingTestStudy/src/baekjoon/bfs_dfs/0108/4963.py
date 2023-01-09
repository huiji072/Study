from collections import deque
import sys
input = sys.stdin.readline

answer = []

m, n = map(int, input().split())
graph = []
for _ in range(m):
    graph.append(list(map(int, input().split())))

dx = [0, 0, -1, 1, -1, -1, 1, 1]
dy = [-1, 1, 0, 0, -1, 1, -1, 1]

visited = [[False] * n for _ in range(m)]


def bfs(x, y):
    queue = deque()
    queue.append([x, y])
    count = 1

    while queue:
        x, y = queue.popleft()

        for i in range(8):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0<=nx<n and 0<=ny<m:
                if graph[nx][ny] == 1 :
                    # visited[nx][ny] = True
                    graph[nx][ny] = 100
                    queue.append([nx, ny])
                    count += 1
    return count

result = []
for i in range(n):
    for j in range(m):
        if graph[i][j] == 1:
            result.append(bfs(i, j))

answer.append(len(result))

print(*answer)
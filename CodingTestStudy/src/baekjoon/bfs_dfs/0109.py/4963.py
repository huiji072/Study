from collections import deque
import sys
input = sys.stdin.readline

dx = [0, 0, -1, 1, -1, -1, 1, 1]
dy = [-1, 1, 0, 0, -1, 1, -1, 1]
answer = []

while True:

    m, n = map(int, input().split())
    if m == n == 0:
        break

    graph = []
    for i in range(n):
        graph.append(list(map(int, input().split())))

    visited = [[False] * m for _ in range(n)]

    def bfs(x, y):
        queue = deque()
        queue.append([x, y])
        count = 0
        visited[x][y] = True

        while queue:
            x, y = queue.popleft()

            for i in range(8):
                nx = x + dx[i]
                ny = y + dy[i]

                if 0<=nx<n and 0<=ny<m:
                    if not visited[nx][ny] and graph[nx][ny] == 1:
                        visited[nx][ny] = True
                        queue.append([nx, ny])
                        count += 1

        return count

    temp = []
    for i in range(n):
        for j in range(m):
            if not visited[i][j] and graph[i][j] == 1:
                temp.append(bfs(i,j))

    answer.append(len(temp))

print(*answer, sep='\n')
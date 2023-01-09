from collections import deque
import sys
input = sys.stdin.readline




result = []

T = int(input())



for _ in range(T):
    m, n, k = map(int, input().split())

    graph = [[0] * m for _ in range(n)]
    for _ in range(k):
        a, b = map(int, input().split())
        graph[b][a] = 1

    visited = [[False] * m for _ in range(n)]

    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]


    def bfs(x, y):
        queue = deque()
        queue.append([x, y])
        count = 1
        visited[x][y] = True

        while queue:
            x, y = queue.popleft()

            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]

                if 0<=nx<n and 0<=ny<m:
                    if graph[nx][ny] == 1 and visited[nx][ny] == False:
                        count += 1
                        visited[nx][ny] = True
                        queue.append([nx, ny])
        return count

    answer = []
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1 and visited[i][j] == False:
                answer.append(bfs(i, j))

    result.append(len(answer))

print(*result)
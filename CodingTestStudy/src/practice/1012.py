n = int(input())
m = int(input())

data = [[] * m for _ in range(n)]
for i in range(n):
    data.append(list(map(int, input().split())))

visited = [[False] * m for _ in range(n)]

dx = [0,0, -1, 1]
dy = [-1, 1, 0, 0]

def bfs(start):
    queue = deque()
    queue.append([x, y])
    visitied[x][y] = True
    count = 0

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0<=nx<n and 0<=ny<m:
                if visited[nx][ny] == False and data[nx][ny] == 0:
                    count += 1
                    gvisitied[nx][ny] = True
                    queue.append([nx, ny])

                    
from collections import deque
import sys
input = sys.stdin.readline

dx = [0, 0, -1, 1, -1, 1, -1, 1]
dy = [-1, 1, 0, 0, -1, -1, 1, 1]

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
                if graph[nx][ny] == 1:
                    graph[nx][ny] = -1
                    queue.append([nx, ny])
                    count += 1
    return count
result = []
while True:
    m, n= map(int, input().split())
    if n==0 and m==0:
        break

    graph = []
    for _ in range(n):
        graph.append(list(map(int, input().split())))



    answer = []
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1:
                answer.append(bfs(i, j))

    result.append(len(answer))

print(*result, sep = '\n')






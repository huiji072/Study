from collections import deque
import sys

input = sys.stdin.readline

n, m = map(int, input().split())

graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

# 미방문 -1 / 방문 0
visited = [[-1] * m for _ in range(n)]

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]


def bfs(x, y):  
    queue = deque()
    queue.append([x, y])
    
    visited[x][y] = 0
    
    while queue:
        x, y =  queue.popleft()
    
        for i in range(4):
            ny = y+dy[i]
            nx = x+dx[i]
            
            if (0<=nx<n) and (0<=ny<m) and visited[nx][ny] == -1: 
                if graph[nx][ny] == 0: #갈수없는 땅 체크
                    visited[nx][ny] = 0
                elif graph[nx][ny] == 1: # 갈수있는땅 체크
                    visited[nx][ny] = visited[x][y] +1
                    queue.append([nx,ny])

for i in range(n):
    for j in range(m):
        if graph[i][j] == 2 and visited[i][j] == -1:
            bfs(j, i)

for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            print(0, end=' ')
        else:
            print(visited[i][j], end=' ')
    print()
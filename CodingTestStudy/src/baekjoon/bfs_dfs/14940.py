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


def bfs(y,x):  
    queue = deque()
    queue.append([y,x])
    
    visited[y][x] = 0
    
    while queue:
        y, x =  queue.popleft()
    
        for i in range(4):
            ny = y+dy[i]
            nx = x+dx[i]
            
            if (0<=ny<n) and (0<=nx<m) and visited[ny][nx] == -1: 
                if graph[ny][nx] == 0: #갈수없는 땅 체크
                    visited[ny][nx] = 0
                elif graph[ny][nx] == 1: # 갈수있는땅 체크
                    visited[ny][nx] = visited[y][x] +1
                    queue.append([ny,nx])

for i in range(n):
    for j in range(m):
        if graph[i][j] == 2 and visited[i][j] == -1:
            bfs(i, j)

for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            print(0, end=' ')
        else:
            print(visited[i][j], end=' ')
    print()
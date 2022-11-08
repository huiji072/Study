from collections import deque
import sys
input = sys.stdin.readline

dx=[-1,0,1,0,-1,-1,1,1] #상하좌우, 대각선 확인하려고
dy=[0,1,0,-1,-1,1,-1,1]
    
def bfs(x, y):
    graph[x][y] = 0
    queue = deque()
    queue.append([x, y])
       
    while queue:
        x, y = queue.popleft()
           
        for k in range(8):
            nx = x + dx[k]
            ny = y + dy[k]
               
            if 0<=nx<n and 0<=ny<m:
                if graph[nx][ny] == 1:
                    graph[nx][ny] = 0
                    queue.append([nx, ny])

while True:
    m, n = map(int, input().split())
    if n==0 and m==0:
        break
        
    graph = []
    for _ in range(n):
        graph.append(list(map(int, input().split())))
            
    count = 0
    
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1:
                bfs(i, j)
                count += 1
    print(count)
    
    

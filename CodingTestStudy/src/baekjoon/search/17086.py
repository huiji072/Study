from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().split())

graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))


dx = [-1,0,1,0,-1,-1,1,1] #상하좌우, 대각선 확인하려고
dy = [0,1,0,-1,-1,1,-1,1]

queue = deque()

def bfs():
    
    while queue:
        x, y = queue.popleft()
        
        for i in range(8):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0<=nx<n and 0<=y<m:
                if not graph[nx][ny]:
                    queue.append([nx, ny])
                    graph[nx][ny] = graph[x][y] + 1
                    
    

for i in range(n):
    for j in range(m):
        if graph[i][j]:
            queue.append([i, j])
            
bfs()
print(max(map(max, graph)) - 1)
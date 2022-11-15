from collections import deque
import sys
input = sys.stdin.readline

n = int(input())

graph = []
for _ in range(n):
    str = input()
    graph.append(list(str))
visited = [[False] * n for _ in range(n)]
visited2 = [[False] * n for _ in range(n)]



dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

def bfs(x, y, target):
    visited[x][y] = True
    queue = deque()
    queue.append([x, y])
    count = 1
    
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0<=nx<n and 0<=ny<n and visited[nx][ny] == False:
                if graph[nx][ny] == target:
                    visited[nx][ny] = True
                    count += 1
                    queue.append([nx, ny])
    return count
result = [] 
for i in range(n):
    for j in range(n):
        if visited[i][j] == False:
            if graph[i][j] == 'R':
                count = bfs(i, j, 'R')
                result.append(count)
            elif graph[i][j] == 'G':
                count = bfs(i, j, 'G')
                result.append(count)
            elif graph[i][j] == 'B':
                count = bfs(i, j, 'B')
                result.append(count)         
print(len(result), end=' ')


    # R, G를 같은 것으로 치기 위해, G->R
graph2 = graph.copy()

for i in range(n):
    for j in range(n):
        if graph2[i][j] == 'G':
            graph2[i][j]='R'
def bfs_rb(x, y, target):
    visited2[x][y] = True
    queue = deque()
    queue.append([x, y])
    count = 1
    
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0<=nx<n and 0<=ny<n and visited2[nx][ny] == False:
                if graph2[nx][ny] == target:
                    visited2[nx][ny] = True
                    count += 1
                    queue.append([nx, ny])
    return count
result = [] 
for i in range(n):
    for j in range(n):
        if visited2[i][j] == False:
            if graph2[i][j] == 'R':
                count = bfs_rb(i, j, 'R')
                result.append(count)
            elif graph2[i][j] == 'B':
                count = bfs_rb(i, j, 'B')
                result.append(count)         
print(len(result))


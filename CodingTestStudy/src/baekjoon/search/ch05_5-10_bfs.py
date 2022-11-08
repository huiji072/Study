from collections import deque


n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(map(int, input().split())))
    
visited = [[False] * m for _ in range(n)]

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

def bfs(x, y):
    count = 1
    
    queue = deque()
    queue.append([x, y])
    
    while queue:
        x, y = queue.popleft()
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0<=nx<n and 0<=ny<m:
                if graph[nx][ny] == 0 and visited[nx][ny] == False:
                    count += 1
                    visited[nx][ny] = True
                    queue.append([nx, ny])
    return count
        

result = []
for i in range(n):
    for j in range(m):
        # 음료가 있고 방문하지 않은 곳
        if graph[i][j] == 0 and visited[i][j] == False:
            visited[i][j] = True
            count = bfs(i, j)
            result.append(count)
            
print(len(result))
"""
3 3
0 0 1
0 1 0
1 0 1
"""

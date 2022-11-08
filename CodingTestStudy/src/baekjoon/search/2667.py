from collections import deque


n = int(input())

graph = []
for i in range(n):
    graph.append(list(map(int, input())))

visited = [[False] * n for _ in range(n)]

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
            
            if 0<=nx<n and 0<=ny<n:
                if graph[nx][ny] == 1 and visited[nx][ny] == False:
                    count += 1
                    visited[nx][ny] = True
                    queue.append([nx, ny])
    return count
    
    

result = []
for i in range(n):
    for j in range(n):
        if graph[i][j] == 1 and visited[i][j] == False:
            visited[i][j] = True
            count = bfs(i, j)
            result.append(count)
            

result.sort()
print(len(result))

for i in result:
    print(i)
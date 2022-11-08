# 연속된 1의 개수 세기
from collections import deque


n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(map(int, input().split())))

visited = [[False] * m for _ in range(n)]

# 상하좌우
dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]



def bfs(x, y):
    # 첫번째로 들어온 그림은 1
    count = 1
    
    queue = deque()
    queue.append([x, y])
    
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

result = []
for i in range(n):
    for j in range(m):
        if graph[i][j] == 1 and visited[i][j] == False:
            visited[i][j] = True
            pic = bfs(i, j)                                             
            result.append(pic)
            
if len(result) == 0:
    print(len(result))
    print(0)
else:
    print(len(result))
    print(max(result))
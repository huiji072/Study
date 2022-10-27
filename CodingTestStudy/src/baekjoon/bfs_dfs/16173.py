from collections import deque


n = int(input())

data = []
visited = [[False] * 3 for _ in range(n)]
for i in range(n):
    data.append(list(map(int, input().split())))
    
#오른쪽, 아래 
dx = [1, 0]
dy = [0, 1]

def bfs():
    x, y = 0, 0
    queue = deque()
    queue.append((x, y))
    
    while queue:
        x, y = queue.popleft()
        
        if x == n-1 and y == n-1:
            visited[x][y] = True
            return True
        
        temp = data[x][y]
        for i in range(2):
            nx = x + dx[i] * temp
            ny = y + dy[i] * temp
            
            if nx < 0 or ny < 0 or nx >= n or ny >= n:
                continue
            
            if not visited[nx][ny]:
                visited[nx][ny] = True
                queue.append((nx, ny))
            


if bfs():
    print('HaruHaru')
else:
    print('Hing')
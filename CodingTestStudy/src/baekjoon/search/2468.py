from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

max_graph = max(map(max, graph))

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]


# 값이 m보다 작으면 비안전한 -1 으로 통일
def safe_zone(m):    
    for i in range(n):
        for j in range(n):
            if graph[i][j] <= m:
                visited[i][j] = -1
    return visited
                
# bfs갯수 세기 - safe_zone(1~n) 결과 값을 cnt로 return 후 result=[]에 넣어서 result가 max일때의 인덱스값
def bfs(x, y):
    count = 1
    queue = deque()
    queue.append([x, y])
    visited[x][y] = -1
    
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0<=nx<n and 0<=ny<n:
                if visited[nx][ny] != -1:
                    count += 1
                    visited[nx][ny] = -1
                    queue.append([nx, ny])
    return count



   
max_result = []
for k in range(max_graph+1):
    visited = [[0] * n for _ in range(n)]    
    safe_zone(k)   
    result = [] 
    for i in range(n):
        for j in range(n):
            if visited[i][j] != -1:
                count = bfs(i,j)
                result.append(count)
    max_result.append(len(result))
    
print(max(max_result))
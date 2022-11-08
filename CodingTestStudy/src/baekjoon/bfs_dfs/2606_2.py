
# 노드 수
from collections import deque


n = int(input()) 
# 간선 수
m = int(input())

data = [[] for _ in range(n+1)]
visited = [False] * (n+1)

for i in range(m):
    x, y = map(int, input().split())
    data[x].append(y)
    data[y].append(x)
    
for i in data:
    i.sort()
    
def bfs(start):
    queue = deque([start])
    visited[start] = True #방문처리
    
    while queue:
        v = queue.popleft()
        
        for i in data[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
                
bfs(1)
print(visited.count(True) - 1)

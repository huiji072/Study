from collections import deque
import sys
input = sys.stdin.readline

n, m, k, x = map(int, input().split())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    
visited = [0] * (n+1)

def bfs(start):
    queue = deque()
    queue.append(start)
    
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if visited[i] == 0:
                visited[i] = visited[v] + 1
                queue.append(i)
                
             
bfs(x)
visited[x] = 0  #자기자신은 0 
result = []
for i in range(len(visited)):
    if visited[i] == k:
        result.append(i)
   
     
if len(result) == 0:
    print(-1)
else:
    sorted(result)
    for i in result:
        print(i)

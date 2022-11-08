from collections import deque


n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]
for i in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
    
for i in graph:
    i.sort()
    
visited = [False] * (n+1)

def bfs(start):
    queue = deque([start])
    visited[start] = True
    
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                visited[i] = True
                queue.append(i)
                
bfs(1)
print(visited.count(True) - 1)
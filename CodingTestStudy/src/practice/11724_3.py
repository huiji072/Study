from collections import deque


n, m = map(int, input().split())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    
visited = [False] * (n+1)

def bfs(start):
    queue = deque()
    queue.append(start)
    visited[start] = True
    
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                visited[i] = True
                queue.append(i)
    
count = 0
for i in range(1, n+1):
    if not visited[i]:
        bfs(i)
        count += 1
print(count)
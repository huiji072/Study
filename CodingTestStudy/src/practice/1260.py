from collections import deque


n, m, v = map (int, input().split())

data = [[] for _ in range(n+1)]

for i in range(m):
    a, b = map(int, input().split())
    data[a].append(b)
    data[b].append(a)
    
def bfs(data, start, visited):
    queue = deque([start])
    visited[start] = True
    
    while queue:
        v = queue.popleft()
        print(v, end=' ')
        for i in data[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
             
def dfs(data, v, visited):
    visited[v] = True
    print(v, end=' ')
    for i in data[v]:
        if not visited[i]:
            dfs(data, i, visited)
            
visited = [False] * (n+1)
bfs(data, v, visited)
print()
visited = [False] * (n+1)
dfs(data, v, visited)
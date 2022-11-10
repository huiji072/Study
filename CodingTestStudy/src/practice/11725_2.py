from collections import deque


n = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(n-1):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
    
visited = [0] * (n+1)
def bfs(start):
    queue = deque()
    queue.append(start)
    
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if visited[i] == 0:
                visited[i] = v
                queue.append(i)
                
bfs(1)
print(visited)
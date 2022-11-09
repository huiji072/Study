from collections import deque


n = int(input())

a, b = map(int, input().split())

m = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    x, y = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

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
                
bfs(a)
print(visited[b])
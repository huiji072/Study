from collections import deque


n = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(n-1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)


visited = [False] * (n+1)
parent = [0] * (n+1)

def bfs(start):
    queue = deque()
    queue.append(start)
    visited[start] = True

    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
                parent[i] = v

for i in range(1, n+1):
    bfs(i)
print(*parent[2:], sep='\n')
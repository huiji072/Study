from collections import deque

import sys
input = sys.stdin.readline

n, m = map(int, input().split())

graph = [[] for _ in range(n+1)]
for i in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
    
visited = [False] *(n+1)
def bfs(start):
    queue = deque([start])
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
from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().split())

graph = [[] for i in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[b].append(a)

  
def bfs(start):
    visited = [False] * (n+1) 
    queue = deque([start])
    visited[start] = True
    count = 1
    
    while queue:
        v = queue.popleft()
        
        for i in graph[v]:
            if not visited[i]:
                visited[i] = True
                count += 1
                queue.append(i)
    return count
              
max_result = 0
for i in range(1, n+1): 
    count = bfs(i)
    if count > max_result:
        result = []
        result.append(i)
        max_result = count
    elif count == max_result:
        result.append(i)
        
print(*result)
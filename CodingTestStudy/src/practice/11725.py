from collections import deque
import sys
input = sys.stdin.readline

n = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(n-1):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
    
result = [0] * (n+1)
def bfs(start):
    queue = deque()
    queue.append(start)
    
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if result[i] == 0:
                result[i] = v
                queue.append(i)
            
bfs(1)
for i in range(2, len(result)):
    print(result[i])
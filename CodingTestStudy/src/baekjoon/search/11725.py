from collections import deque
import sys
input = sys.stdin.readline

n = int(input())

graph = [[] for _ in range(n+1)]
for i in range(n-1):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
    
visited = [0] * (n+1)
def bfs():
    queue = deque()
    queue.append(1)
    
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if visited[i] == 0:
                visited[i] = v
                queue.append(i)
                
bfs()
for i in range(2, len(visited)):
    print(visited[i])
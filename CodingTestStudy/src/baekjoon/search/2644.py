from collections import deque
import sys
input = sys.stdin.readline

'''

'''

n = int(input())
data = list(map(int, input().split()))

m = int(input())
graph = [[] for _ in range(n+1)]

for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
    
visited = [0] * (n+1)

def bfs(v):
    queue = deque()
    queue.append(v)
    
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if visited[i] == 0:
                visited[i] = visited[v] + 1
                queue.append(i)
bfs(data[0])                
print(visited)
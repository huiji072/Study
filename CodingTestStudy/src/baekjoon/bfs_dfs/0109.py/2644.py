from collections import deque
import sys

input = sys.stdin.readline

n = int(input())
target_x, target_y = map(int, input().split())
m = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [False] * (n+1)
relate = [0] * (n+1)

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
                relate[i] = relate[v]+1

bfs(target_x)
if relate[target_y] == 0:
    print(-1)
else:
    print(relate[target_y])

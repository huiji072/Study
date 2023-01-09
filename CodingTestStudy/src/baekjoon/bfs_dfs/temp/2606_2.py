from collections import deque
import sys
input = sys.stdin.readline


n = int(input())
m = int(input())

graph = [[] * m for _ in range(n+1)]
for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)

visited = [False] * (n+1)

def bfs():
    queue = deque()
    queue.append(1)
    visited[1] = True
    count = 0

    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                visited[i] = True
                count += 1
                queue.append(i)
    return count

print(bfs())
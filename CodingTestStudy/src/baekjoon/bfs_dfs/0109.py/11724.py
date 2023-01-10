from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().split())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [False] * (n+1)

def bfs(start):
    queue = deque()
    queue.append(start)
    visited[start] = True
    count = 0

    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                count += 1
                visited[i] = True
                queue.append(i)

    return count
temp = []
for i in range(1, n+1):
    if not visited[i]:
        temp.append(bfs(i))

print(len(temp))
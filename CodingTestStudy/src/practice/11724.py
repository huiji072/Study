from collections import deque
import sys

input = sys.stdin.readline

n, m = map(int, input().split())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)

visitied = [False] * (n+1)
def bfs(start):
    queue = deque()
    queue.append(start)
    visitied[start] = True

    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visitied[i]:
                visitied[i] = True
                queue.append(i)

count = 0
for i in range(1, n+1):
    if not visitied[i]:
        bfs(i)
        count += 1

print(count)
from collections import deque
import sys

input = sys.stdin.readline

n, m = map(int, input().split())

graph = [[] for _ in range(n+1)]
for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)          

visited = [False] * (n+1)

def bfs(i):
    queue = deque()
    queue.append(i)
    visited[i] = True
    count = 0

    while queue:
        v = queue.popleft()

        for i in graph[v]:
            if not visited[i]:
                visited[i] = True
                count += 1
                queue.append(i)
    return count

answer = []
for i in range(1, n+1):
    if not visited[i]:
        count = bfs(i)
        answer.append(count)


print(len(answer))

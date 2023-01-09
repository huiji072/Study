from collections import deque
import sys
input = sys.stdin.readline

n = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(n-1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [-1] * (n+1)

def bfs(start):
    queue = deque()
    queue.append(start)
    visited[start] = True

    while queue:
        v = queue.popleft()

        for i in graph[v]:
            if visited[i] == -1:
                visited[i] = v
                queue.append(i)


bfs(1)
for i in range(2, n+1):
    print(visited[i])
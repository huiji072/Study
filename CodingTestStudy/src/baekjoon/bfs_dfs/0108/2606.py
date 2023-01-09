from collections import deque


n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [False] * (n+1)
count = 0
def bfs(start):
    queue = deque()
    queue.append(start)
    count = 0
    visited[start] = True

    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                visited[i] = True
                count += 1
                queue.append(i)

    return count
result = []

print(bfs(1))
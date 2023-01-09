from collections import deque


n = int(input())

target_a, target_b = map(int, input().split())

m = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [False] * (n+1)
target = [0] * (n+1)

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
                target[i] = target[v] + 1
            

bfs(target_a)
if target[target_b] == 0:
    print(-1)
else:
    print(target[target_b])
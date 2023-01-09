from collections import deque


total = int(input())

result_x, result_y= map(int, input().split())

n = int(input())

graph = [[] for _ in range(total+1)]
for _ in range(n):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [False] * (total+1)
result = [-1] * (total+1)

def bfs(start):
    queue = deque()
    queue.append(start)
    visited[start] = True

    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
                result[i] = result[v] + 1

bfs(result_x)
if result[result_y] != -1:
    print(result[result_y]+1)
else:
    print(-1)
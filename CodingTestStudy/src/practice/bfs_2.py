n, m = map(int, input().split())

graph = [[] for _ in range(n+1)]
for _ in range(n):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)

visited = [False] * (n+1)

def bfs(start):
    queue  = deque()
    queue.append(start)
    visited[start] =  True
    
    count = 1

    for i in graph[v]:
        if not visitied[i]:
            visited[i] = True
            bfs(i)

for i in range(n):
    if not visitied[i]:
        bfs(i)
        
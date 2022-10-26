from collections import deque
n, m, v = map(int, input().split())

bfs_data = [[] for _ in range(n+1)]

for i in range(m):
    x, y = map(int, input().split())
    bfs_data[x].append(y)
    bfs_data[y].append(x)
    
dfs_data = bfs_data.copy()
    
def bfs(data, start):
    queue = deque([start])
    # 현재 위치를 방문 처리
    visited[start] = True
    while queue:
        # 큐에서 하나의 원소를 뽑아 출력
        v = queue.popleft()
        print(v, end=' ')
        for i in data[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True


               
def dfs(data, v, visited):
    visited[v] = True
    print(v, end=' ')
    for i in data[v]:
        if not visited[i]:
            dfs(data, i, visited)

visited = [False] * (n+1) 
dfs(dfs_data, v, visited)
print()     
visited = [False] * (n+1)           
bfs(bfs_data, v)
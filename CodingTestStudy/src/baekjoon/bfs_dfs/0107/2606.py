from collections import deque


n = int(input())
m = int(input())

arr = [[] for _ in range(n+1)]
visited = [False] * (n+1)
for _ in range(m):
    a, b = map(int, input().split())
    arr[a].append(b)
    arr[b].append(a)


def bfs(arr, start):
    visited[start] = True
    q = deque()
    q.append(start)
    count = 0

    while q:
        v = q.popleft()
        for i in arr[v]:
            if not visited[i]:
                visited[i] = True
                q.append(i)
                count += 1
    return count

print(bfs(arr, 1))


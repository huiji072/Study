'''
상하좌유 대각선까지
'''

from collections import deque

answer = []
while(True):
    m, n = map(int, input().split())
    

    if m==0 and n==0:
        break

    graph = []

    for _ in range(n):
        graph.append(list(map(int, input().split())))


    dx = [-1, -1, -1, 0, 0, 1, 1, 1]
    dy = [-1, 0, 1, -1, 1, -1, 0, 1]



    def bfs(x, y):
        queue = deque()
        queue.append([x, y])
        count = 0

        while queue:
            x, y = queue.popleft()
            for i in range(8):
                nx = x + dx[i]
                ny = y + dy[i]

                if 0<=nx<n and 0<=ny<m:
                    if graph[nx][ny] == 1:
                        graph[nx][ny] = 0
                        count += 1
                        queue.append([nx, ny])

        return count

    result = []
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1:
                count = bfs(i, j)
                result.append(count)

    answer.append(len(result))

print(*answer, sep='\n')
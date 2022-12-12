'''
오른쪽 아래로만 이동 가능
현재 밟고 있는 칸만큼만 이동 가능
'''

from collections import deque
import sys
input = sys.stdin.readline

n = int(input())

graph = []

for _ in range(n):
    graph.append(list(map(int, input().split())))

dx = [0, 1]
dy = [1, 0]

visited = [[False] * n for _ in range(n)]

def bfs(x, y):
    queue = deque()
    queue.append([x, y])
    visited[x][y] = True

    while queue:
        x, y = queue.popleft()

        for i in range(2):
            nx = x + dx[i]*graph[x][y]
            ny = y + dy[i]*graph[x][y]

            if 0<=nx<n and 0<=ny<n:
                if visited[nx][ny] == False:
                    visited[nx][ny] = True
                    queue.append([nx, ny])
    return nx, ny

bfs(0, 0)

if visited[n-1][n-1] == True:
    print("HaruHaru")
else:
    print("Hing")
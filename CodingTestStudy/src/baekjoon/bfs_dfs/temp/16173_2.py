'''
정사각형
출발점은 1, 1
이동방향 : 오른쪽, 아래
n, n 게임 종료
현재 밟고있는 수만큼 이동 가능
'''

from collections import deque
import sys
input = sys.stdin.readline

n = int(input())

graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

visited = [[False] * n for _ in range(n)]

dx = [0, 1]
dy = [1, 0]

def bfs():
    queue = deque()
    queue.append([0, 0])

    while queue:
        x, y = queue.popleft()
        visited[x][y]  = True
        temp = graph[x][y]

        if temp == -1:
            break

        for i in range(len(dx)):
            nx = x + dx[i] * temp
            ny = y + dy[i] * temp

            if 0<=nx<n and 0<=ny<n:
                if not visited[nx][ny]:
                    visited[nx][ny] = True
                    queue.append([nx, ny])

bfs()
if visited[n-1][n-1] == True:
    print("HaruHaru")
else:
    print("Hing")
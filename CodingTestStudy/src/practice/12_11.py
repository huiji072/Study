n = int(input())
k = int(input())

data = [[0] * (n+1) for _ in range(n+1)]

for _ in range(k):
    a, b = map(int, input().split())
    data[a][b] = 1 #사과 있는 곳은 1로 표시
    
    
l = int(input())
info = []
for _ in range(l):
    a, b = input().split()
    info.append((int(a), b))
    
# 동쪽부터 시계방향
dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

def turn(c, d):
    if c == 'D':
        d = (d+1)%4
    else:
        d = (d-1)%4
    return d

def solution():
    x, y = 1, 1 #처음은 1, 1
    d = 0 #처음엔 동쪽을 보고있음
    data[x][y] = 2 #방문한 곳은 2
    time = 0 
    infoIndex = 0
    
    q = [(x, y)]
    
    while True:
        nx = x + dx[d]
        ny = y + dy[d]
        
        if nx < 0 or ny < 0 or nx >n or ny > n or data[nx][ny]==2:
            time += 1
            break
        else:
            
            if data[nx][ny] == 0:
                data[nx][ny] = 2
            if data[nx][ny] == 1:
                data[nx][ny] = 2
                q.append((nx, ny))
        time += 1
        x, y = nx, ny
        if time == info[infoIndex][0]:
            d = turn(info[infoIndex][1],d)
            infoIndex += 1
    return time

print(solution())
                                                   
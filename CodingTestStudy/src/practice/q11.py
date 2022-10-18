from time import time


n = int(input())
k = int(input())

# n*n 기본 값은 0
data = [[0] * (n+1) in range(n+1)]

# 사과가 있는 곳은 1
for _ in range(k):
    a, b = map(int, input().split())
    data[a][b] = 1
    
    
l = int(input())
info = []
for _ in range(l):
    x, c = input().split()
    info.append((int(x), c))
    

direction = 0    
dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

def turn(direction, c):
    if c == 'L':
        direction = (direction - 1) % 4
    else:
        direction = (direction + 1) % 4
    return direction

def solution():
    x, y = 1, 1
    data[x][y] = 2
    index = 0
    temp = 0
    direction = 0
    
    q = [(x, y)]
    
    while True:
        nx = x + dx[direction]
        ny = y + dy[direction]
        
        if nx < 1 or ny < 1 or nx > n or ny > n:
            time += 1
            break
        else:
            if data[nx][ny] == 0:
                data[nx][ny] = 2
            if data[nx][ny] == 1:
                data[nx][ny] = 2
                q.append((nx, ny))
        x, y = nx, ny
        time += 1
        
        if time == data[index][0]:
            turn(direction, data[index][1])
            index += 1
    return time
                

n = int(input())
k = int(input())
data = [[0] * (n+1) for _ in range(n+1)]
info = []

for _ in range(k):
    a, b = map(int, input().split())
    data[a][b] = 1
    
l = int(input())
for _ in range(l):
    x, c = input().split()
    info.append((int(x), c))

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

def turn(direction, c):
    if c == "L":
        direction = (direction - 1) % 4
    else:
        direction = (direction + 1) % 4
    return direction

def simulate():
    x, y = 1, 1 #뱀의 머리 
    data[x][y] = 2 #뱀이 조재하는 곳은 2로 표시
    direction = 0 #처음에는 동쪽을 보고 있음
    time = 0
    index = 0
    
    q = [(x, y)]
    
    while True:
        nx = x + dx[direction]
        ny = y + dy[direction]
        
        if 1 <= nx and nx <= n and 1 <= ny and ny <= n and data[nx][ny] != 2:
            if data[nx][ny] == 0:
                data[nx][ny] = 2
            
            if data[nx][ny] == 1:
                data[nx][ny] = 2
                q.append((nx, ny))
        else:
            time += 1
            break
        x, y = nx, ny
        time += 1
        if time == info[index][0]:
            direction = turn(direction, info[index][1])
            index += 1
    return time

print(simulate())
    
n, m = 4, 4
x, y, direction = 1, 1, 0
map = [(1, 1, 1, 1), (1, 0 ,0, 1), (1, 1, 0, 1), (1, 1, 1, 1)]

d = [[0] * m for _ in range(n)]

d[x][y] = 1
cnt = 1

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def turn_left():
    global direction
    direction -= 1
    if direction == -1:
        direction = 3
        
turn_time = 0
while True:
    turn_left()
    nx = x + dx[direction]
    ny = y + dy[direction]
    
    if map[nx][ny] == 0 and d[nx][ny] == 0:
        d[nx][ny] = 1
        x, y = nx, ny
        cnt += 1
        turn_time = 0
        continue
    else:
        turn_time += 1
        
    if turn_time == 4:
        turn_time = 0
        break
    
print(cnt)
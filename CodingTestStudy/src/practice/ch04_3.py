n, m = 4, 4
x, y, direction = 1, 1, 0

# map = [(1, 1, 1, 1), (1, 0 ,0, 1), (1, 1, 0, 1), (1, 1, 1, 1)]
map = [[1, 1, 1, 1], [1, 0 ,0, 1], [1, 1, 0, 1], [1, 1, 1, 1]]

d = [[0] * m for _ in range(n)]
# 현재 위치 방문 처리
d[x][y] = 1
cnt = 0

# 북동남서
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def turn_left():
    global direction
    direction -= 1
    if direction == -1:
        direction = 3
        
while True:
    turn_time = 0
    turn_left()
    nx = x + dx[direction]
    ny = y + dy[direction]
    
    if map[nx][ny] == 0:
        d[nx][ny] = 1
        x, y = nx, ny
        cnt += 1
        turn_time = 0
    else:
        turn_time += 1
        
    if turn_time == 4:
        turn_time = 0
        break
    
print(cnt)
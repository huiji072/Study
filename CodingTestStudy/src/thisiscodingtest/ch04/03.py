n, m = 4, 4
x, y, direction = 1, 1, 0

d = [[0] * m for _ in range(n)]
map = [(1, 1, 1, 1), (1, 0 ,0, 1), (1, 1, 0, 1), (1, 1, 1, 1)]

# 현재 위치 방문 처리
d[x][y] = 1

# 북동남서
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

# 왼쪽으로 회전
def turn_left():
    global direction
    direction -= 1
    if direction == -1:
        direction = 3
        

count = 1
turn_time = 0
while True:
    turn_left()
    # 동서남북 방향으로 한칸 이동
    nx = x + dx[direction]
    ny = y + dy[direction]
    
    # 이동한 곳이 육지이면 간 방문체크
    if d[nx][ny] == 0 and map[nx][ny] == 0:
        d[nx][ny] = 1
        x = nx
        y = ny
        count += 1
        turn_time = 0
        continue
    else: 
        turn_time += 1 #이동한 곳이 바다일 때
    
    # 동서남북 모두 바다일 때 뒤로 이동
    if turn_time == 4:
        turn_time = 0
        break
        
        
        
print(count)
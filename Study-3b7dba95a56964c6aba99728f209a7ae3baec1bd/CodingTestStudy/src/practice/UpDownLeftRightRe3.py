# 5
# R R R U D D

n = int(input())
x, y = 1, 1
datas = input().split()

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

for data in datas:
    for i in range(len(move_types)):
        if data == move_types[i]:
            nx = dx[i] + x
            ny = dy[i] + y
    if nx < 1 or ny < 1 or nx > n or ny > n:
        continue
    
    x, y = nx, ny
    
print(x, y)
n = int(input())
moves = input().split()
x, y = 1, 1

move_type = ['L', 'R', 'U', 'D']
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

for move in moves:
    for i in range(4):
        if move == move_type[i]:
            nx = x + dx[i]
            ny = y + dy[i]
    if nx < 1 or ny < 1 or nx > n or ny > n:
        continue
        
    x, y = nx, ny
        
print(x, y)
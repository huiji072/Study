from re import X


n = 5
plans = ['R', 'R', 'R', 'U', 'D', 'D']

steps = ['L', 'R', 'U', 'D']
dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]

x, y = 0, 0


for plan in plans:
    for i in range(len(steps)):
        if plan == steps[i]:
            nx = x + dx[i]
            ny = y + dy[i]
    if nx < 0 or ny < 0 or nx > n or ny > n:
        continue    
    x, y = nx, ny
        
print(x+1, y+1)
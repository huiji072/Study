n, m, r = map(int, input().split())

data = []
for i in range(n):
    data.append(list(map(int, input().split())))
    
forward = []
defensive = []
for i in range(r):
    forward.append(list(input().split()))
    defensive.append(list(input().split()))

    #E, W, S, N 
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]
moves = ['E', 'W', 'S', 'N']

board = [['S'] * m for _ in range(n)]
print(board)

for i in range(r):
    x, y = forward[i][0], forward[i][1]
    for j in range(4):
        if forward[i][2] == moves[j]:
            nx = x + dx[i]
            ny = y + dy[i]
        if nx > n or ny > m or nx < 0 or ny <0:
            continue
        board[nx][ny] = 'F'
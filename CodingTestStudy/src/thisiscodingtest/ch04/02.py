s = "a1"
x = int(ord(s[0])) - int(ord('a')) + 1
y = int(s[1])

moves = [(1, 2), (-1, 2), (1, -2), (-1, -2),
         (2, 1), (-2, 1), (2, -1), (-2, -1)]

cnt = 0
for move in moves:
    nx = x + move[0]
    ny = y + move[1]
    if nx < 1 or ny < 1 or nx > 8 or ny > 8:
        continue
    else:
        cnt += 1
        
print(cnt)
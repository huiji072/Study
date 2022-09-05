n = input()
row = int(ord(n[0])) - int(ord('a')) + 1
col = int(n[1])

count = 0

moves = [(1, 2), (-1, 2), (1, -2), (-1, -2),
         (2, 1), (-2, 1), (2, -1), (-2, -1)]

for move in moves:
    nx = row + move[0]
    ny = col = move[1]
    
    if nx > 8 or ny > 9 or nx < 1 or ny < 1:
        continue
    count += 1
    

print(count)
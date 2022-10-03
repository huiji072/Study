data = input()
col = int(data[1])
row = int(ord(data[0])) - int(ord('a')) + 1

moves = [(1, 2), (2, 1), (-1, -2), (-2, -1),
        (-1, 2), (2, -1), (1, -2), (-2, 1)]

count = 0
for move in moves:
    nx = col + move[0]
    ny = row + move[1]
    if nx >7 or ny > 8 or nx < 1 or ny < 1:
        continue
    count += 1

print(count)
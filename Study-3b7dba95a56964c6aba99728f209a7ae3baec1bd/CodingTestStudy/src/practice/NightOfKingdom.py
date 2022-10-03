from calendar import c


data = input()
col = int(ord(data[0])) - int(ord('a')) + 1
row = int(data[1])

move_types = [(1, 2), (-1, 2), (1, -2), (-1, -2),
              (2, 1), (-2, 1), (2, -1), (-2, -1)]
count = 0

for move in move_types:
    nx = col + move[0]
    ny = row = move[1]
    
    if nx > 8 or ny > 8 or nx <1 or ny < 1:
        continue
    
    count += 1
    
print(count)
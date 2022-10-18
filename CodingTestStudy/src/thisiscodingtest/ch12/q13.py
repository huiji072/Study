from itertools import combinations


n, m = 5, 3

data = [
    [0, 0, 1, 0, 0],
    [0, 0, 2, 0, 1],
    [0, 1, 2, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 2, 0, 0, 2]  
]

house = []
chicken = []

for i in range(n):
    for j in range(n):
        if data[i][j] == 1:
            house.append((i, j))
        elif data[i][j] == 2:
            chicken.append((i, j))
            
candidates = list(combinations(chicken, m))


def get_sum(candidate):
    result = 0
    for hx, hy in house:
        temp = 1e9
        for cx, cy in candidate:
            temp = min(temp, abs(hx-cx) + abs(hy-cy))
            
        result += temp
    return result

result = 1e9
for candidate in candidates:
    result = min(result, get_sum(candidate))
    
print(result)
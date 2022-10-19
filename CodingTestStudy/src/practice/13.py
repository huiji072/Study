from itertools import combinations


n, m = map(int, input().split())

data = []
for _ in range(n):
    data.append(list(map(int, input().split())))
    
house = []
chicken = []
for a in range(n):
    for b in range(n):
        if data[a][b] == 1:
            house.append((a, b))
        elif data[a][b] == 2:
            chicken.append((a, b))
        
combi = combinations(chicken, 3)

def solution(combi):
    sum = 0
    for hx, hy in house:
        result = 1e9
        for cx, cy in combi:
            result = min(result, abs(hx-cx)+abs(hy-cy))
        sum += result
    return sum

result = 1e9
for c in combi:
    result = min(result, solution(c))
    
print(result)


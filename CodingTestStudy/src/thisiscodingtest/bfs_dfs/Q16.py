n, m = map(int, input().split())

data = []
temp = [[0] * m for _ in range(n)]

for _ in range(n):
    data.append(list(map(int, input().split())))
    
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

result = 0

def virus(x, y):
    for i 
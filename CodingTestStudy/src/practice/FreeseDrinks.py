from re import T


n, m = map(int, input().split())

graph = []

for i in range(n):
    graph.append(list(map(int, input())))
    
def dfs(x, y):
    if x<0 or x>=n or y<0 or y>=m:
        return False
    
    if graph == 0:
        graph = 1
        
        dfs(x-1, y)
        dfs(x, y+1)
        dfs(x, y-1)
        dfs(x+1, y)
        return True
    return False

result = 0

for i in range(n):
    for j in range(m):
        if dfs(i, j) == True:
            result += 1
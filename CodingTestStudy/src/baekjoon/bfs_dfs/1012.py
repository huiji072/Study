import sys


T = int(input())
sys.setrecursionlimit(1000000)

for t in range(T):
    
    n, m, k = map(int, input().split())
    
    graph = [[0] * m for i in range(n)]
    
    for i in range(k):
        x, y = map(int, input().split())
        graph[x][y] = 1

    def dfs(x, y):
        if x < 0 or y < 0 or x >= n or y >= m:
            return False
        
        if graph[x][y] == 1:
            graph[x][y] = 0
            dfs(x-1, y)
            dfs(x+1, y)
            dfs(x, y-1)
            dfs(x, y+1)
            return True
        return False
    
    result = 0
    for a in range(n):
        for b in range(m):
            if dfs(a, b) == True:
                result += 1
                
    print(result)
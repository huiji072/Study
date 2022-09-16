n = int(input())

graph = []
cntList = []

for i in range(n):
    graph.append(list(map(int, input())))

def dfs(x, y):
    if x<0 or x>=n or y<0 or y>=n:
        return False
    
    if graph[x][y] == 1:
        global count
        count += 1
        graph[x][y] = 0
        
        dfs(x-1, y)
        dfs(x, y-1)
        dfs(x+1, y)
        dfs(x, y+1)
        
        return True
        print(cnt)
    return False
count = 0
result = 0

for i in range(n):
    for j in range(n):
        if dfs(i, j) == True:
            cntList.append(count)
            result += 1
            count = 0
                      
print(result)
cntList.sort()

for i in range(len(cntList)):
    print(cntList[i])
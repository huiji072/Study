n, m = 2, 5
x, y = 0, 1
queries = 	[[3,1],[2,2],[1,1],[2,3],[0,1],[2,1]]

def solution(n, m, x, y, queries):
    answer = 0
    data = [[0] * n for _ in range(m)]
    
#     0, 1, 2, 3
    dx = [-1, 0, 0, 1]
    dy = [0, 1, -1, 0]
    
    
    for i in range(n):
        for j in range(m):
            nx, ny = 0, 0
            for a, b in queries:
                nx = i + (dx[a] * b)
                ny = j + (dy[a] * b)
                
                if nx < 0 or ny < 0 or nx > n or ny > m:
                    break
                else:
                    if nx == x and ny == y:
                        answer += 1
                        break
                    i, j = nx, ny
                
    return answer
print(solution(n, m, x, y, queries))
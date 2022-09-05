board = [[0 for j in range(20)] for i in range(20)]

n = int(input())

for i in range(n):
    x, y = map(int, input().split())
    board[x][y] = 1
    

for i in range(20):
    for j in range(20):
        print(board[i][j], end=" ")
    print()

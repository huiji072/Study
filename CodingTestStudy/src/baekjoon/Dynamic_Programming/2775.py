import sys
input = sys.stdin.readline

T = int(input())

result = []

for t in range(T):
    n = int(input())
    m = int(input())

    arr = [[0 for _ in range(m)] for i in range(n+1)]

    for i in range(m):
        arr[0][i] = i+1

    for i in range(n):
        arr[i][0] = 1

    for i in range(1, n+1):
        for j in range(m):
            arr[i][j] = arr[i-1][j] + arr[i][j-1]

    result.append(arr[n][m-1])

print(*result, sep='\n')
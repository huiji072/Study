n, m = map(int, input().split())

data = [list(input().rstrip()) for _ in range(n)]

mx = 0
width = min(n, m)
# cnt = 0
for i in range(n):
    for j in range(m):
        for cnt in range(width):
            if i+cnt >= n or j+cnt >= m:
                break
            if data[i][j] == data[i+cnt][j] == data[i][j+cnt] == data[i+cnt][j+cnt]:
                mx = max(mx,cnt)
            
print((mx+1)**2)
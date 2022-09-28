# n, m = map(int, input().split())
# data = list(map(int, input().split()))

n, m = 4, 6
data = [19, 15, 10, 17]
result = [0, 0, 0, 0]
cnt = 0
while sum(result) != m:
    for i in range(n):
        result[i] = data[i] - cnt
        if result[i] <= 0:
            result[i] = 0
    cnt += 1
    
print(cnt-1)
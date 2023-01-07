import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = list(input().rstrip())

cnt = 0

for i in range(n):
    if arr[i] == 'P':
        for j in range(i-m, i+m+1):
            if 0 <= j < n and arr[j] == 'H': 
                arr[j] = 'X'
                cnt += 1
                break

print(cnt)

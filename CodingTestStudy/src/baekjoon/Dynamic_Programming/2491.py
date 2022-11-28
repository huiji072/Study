import sys
input = sys.stdin.readline
n = int(input())

data = list(map(int, input().split()))

d = [1] * (n+1)
d2 = [1] * (n+1)
for i in range(1, n):
    if data[i-1] <= data[i]:
        d[i] = max(d[i], d[i-1]+1)
    if data[i-1] >= data[i]:
        d2[i] = max(d2[i], d2[i-1]+1)
print(max(max(d), max(d2)))
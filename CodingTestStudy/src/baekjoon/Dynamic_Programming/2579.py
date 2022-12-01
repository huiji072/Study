import sys
input = sys.stdin.readline

n = int(input())

arr = []
for i in range(n):
    arr.append(int(input()))

d = [0] * (n+1)
d[0] = arr[0]
d[1] = arr[0]+arr[1]
d[2] = max(arr[0]+arr[2], arr[1]+arr[2])


for i in range(3, n):
    d[i] = max(arr[i] + arr[i-1] + d[i-3], arr[i]+d[i-2])

print(d[n-1])
n = int(input())

arr = []
for _ in range(n):
    arr.append(float(input()))

d = [0] * (n+1)

d[0] = arr[0] 

for i in range(1, n):
    d[i] = max(arr[i], d[i-1]*arr[i])

print('%0.3f' % max(d))

n = int(input())

arr = [3, 5]
d = [50001] * (n+1)
d[0] = 0

for i in range(2):
    for j in range(arr[i], n+1):
        d[j] = min(d[j], d[j-arr[i]] + 1)


if d[n] == 50001:
    print(-1)
else:
    print(d[n])
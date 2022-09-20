from re import T


n, k = map(int, input().split())

a = list(map(int, input().split()))
b = list(map(int, input().split()))

a = sorted(a, reverse=True)
b = sorted(b, reverse=True)

print(a)
print(b)

result = 0

for i in range(0, k):
    result += b[i]

for i in range(0, n-k):
    result += a[i]

print(result)
    
#     5 3
# 1 2 5 4 3
# 5 5 6 6 5
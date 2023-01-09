import sys
input = sys.stdin.readline

a, k = map(int, input().split())

count = 0
for i in range(k):
    if a==k:
        print(int(count))
        break
    if k % 2 == 0 and k // 2 >= a:
        k /= 2
        count += 1
    else:
        k -= 1
        count += 1
    
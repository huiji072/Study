import sys
input = sys.stdin.readline

n, k = map(int, input().split())

price = [int(input()) for _ in range(n)]

price.reverse()

cnt = 0
for p in price:
    cnt += k//p
    k = k % p

print(cnt)
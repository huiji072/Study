import sys
input = sys.stdin.readline

n = int(input())

d = list(map(int, input().split()))
p = list(map(int, input().split()))

min_p = p[0]
result = 0

for i in range(n-1):
    if p[i] < min_p:
        min_p = p[i]
    result += min_p * d[i]

print(result)
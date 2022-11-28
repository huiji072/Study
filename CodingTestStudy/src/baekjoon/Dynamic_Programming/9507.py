import sys
input = sys.stdin.readline

t = int(input())

n = []
for i in range(t):
    n.append(int(input()))

d = [0] * 68

def koong(n):
    if d[n] != 0:
        return d[n]
    if n < 2:
        return 1
    if n == 2:
        return 2
    if n == 3:
        return 4
    if n > 3:
        d[n] = koong(n-1)+koong(n-2)+koong(n-3)+koong(n-4)
    return d[n]

for i in n:
    print(koong(i))
n = int(input())

data = list(map(int, input().split()))

d = [0] * (n+1)

count_up = 0
count_down = 0
for i in range(n+1):
    d
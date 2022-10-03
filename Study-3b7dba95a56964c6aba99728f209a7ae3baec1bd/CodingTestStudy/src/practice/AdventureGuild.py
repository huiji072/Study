# 5
# 2 3 1 2 2

n = int(input())
fear = list(map(int, input().split()))

fear.sort()

count = 0

for i in fear:
    print(i)
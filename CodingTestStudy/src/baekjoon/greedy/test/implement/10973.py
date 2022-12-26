import itertools


n = int(input())
per = tuple(map(int, input().split()))

data = []
for i in range(1, n+1):
    data.append(i)
    
result = 0
for i in itertools.permutations(data, n):
    if i == per:
        break
    result = i
    
if result == 0:
    print(-1)
else:
    for r in result:
        print(r, end=' ')
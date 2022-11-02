from collections import Counter

n = int(input())
data = list(map(int, input().split()))

m = int(input())
target_data = list(map(int, input().split()))


counter = Counter(data)

for i in target_data:
    print(counter[i], end=' ')
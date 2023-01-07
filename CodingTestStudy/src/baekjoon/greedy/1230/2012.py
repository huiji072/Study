import sys
input = sys.stdin.readline

n = int(input())

arr = []
for _ in range(n):
    arr.append(int(input()))

arr.sort()

result = 0
for i in range(n):
    result += abs(arr[i] - (i+1))

print(result)
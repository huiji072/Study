import sys
input = sys.stdin.readline

n = int(input())

arr = []
for _ in range(n):
    arr.append(int(input()))
arr.sort(reverse=True)

result = -1
for i in range(n-2):
    if arr[i] < arr[i+1] + arr[i+2]:
        result = 0
        print(sum(arr[i:i+3]))
        break
if result == -1:
    print(-1)
a, b = map(int, input().split())
n = int(input())

arr = []
for _ in range(n):
    arr.append(int(input()))

data = []
for i in range(n):
    data.append(abs(arr[i]-b))

min_index = data.index(min(data))
temp1 = arr[min_index]

answer = 1
if temp1 > b:
    answer += temp1 - b
elif b > temp1:
    answer += b - temp1

temp2 = abs(a-b)

print(min(temp2, answer))
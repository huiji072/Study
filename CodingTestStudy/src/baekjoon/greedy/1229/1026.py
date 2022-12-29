s = int(input())

a = list(map(int, input().split()))
b = list(map(int, input().split()))

a.sort()

print(a)

answer = 0
temp = 0
for i in range(s):
    temp = max(b)
    answer += a[i] * temp
    b.remove(temp)
print(answer)
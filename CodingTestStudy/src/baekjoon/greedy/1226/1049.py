n, m = map(int, input().split())

arr = []
for _ in range(m):
    arr.append(list(map(int, input().split())))

# arr[0] * 1은 패키지 값 arr[1] * n은 개별 값을 모두 result에 추가

result = []

for a in arr:
    if n >= 6:
        if a[0] >= a[1]*6:
            result.append(a[0])
        else:
            result.append(a[1]*6)

print(min(result))
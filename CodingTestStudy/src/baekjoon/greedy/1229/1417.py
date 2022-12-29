import sys
input = sys.stdin.readline

n = int(input())

arr = []
for _ in range(n):
    arr.append(int(input()))

# 첫번쨰 인덱스는 다솜이
dasom = arr[0]

# 다솜이를 arr에서 제외
arr.pop(0)

cnt = 0

while True:
    # arr가 0일때, 다솜이만 지원했을 때 break
    if len(arr) == 0:
        break
    for i in range(len(arr)):
        # 다른 지원자가 다솜이보다 같거나 크면 
        if arr[i] >= dasom:
            # 지원자 득표수 -1
            arr[i] -= 1
            # 다솜이 득표수 +1
            dasom += 1
            cnt += 1
    # 지원자의 최다득표수가 다솜이보다 작으면 break
    if max(arr) < dasom:
        break

print(cnt)
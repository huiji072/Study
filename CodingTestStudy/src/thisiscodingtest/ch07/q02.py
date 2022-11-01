n = int(input())

# 존재하는 데이터
data = list(map(int, input().split()))
data.sort()

m = int(input())
# 찾고자하는 데이터
order_data = list(map(int, input().split()))

def binary_search(data, target, start, end):
    while start <= end:
        mid = (start + end) // 2
        # 가운데와 타겟이 같을 경우
        if data[mid] == target:
            return mid
        # 가운데보다 타겟이 더 작을 경우
        elif data[mid] > target:
            end = mid - 1
        # 가운데보다 타겟이 더 클 경우
        else:
            start = mid + 1
    return None
 
for i in order_data:
    result = binary_search(data, i, 0, n-1)
    # 타겟이 data에 있는 경우
    if result != None:
        print('yes', end=' ')
    # 타겟이 data에 없는 경우
    else:
        print('no', end=' ')
n = 5
data = [8, 3, 7, 9, 2]
data.sort()

m = 3
order_data = [5, 7, 9]

def binary_search(data, target, start, end):
    while start <= end:
        mid = (start+end) // 2
        
        # 찾으려는 값이 중간값일 때
        if data[mid] == target:
            return mid
        # 찾으려는 값이 중간값 보다 작을 때 (왼쪽으로 이동)
        elif data[mid] > target:
            end = mid - 1
        # 찾으려는 값이 중간값 보다 클 때 (오른쪽으로 이동)
        else:
            start = mid + 1        
    return None

for i in order_data:
    result = binary_search(data, i, 0, n-1)
    
    if result != None:
        print("값이 존재")
    else:
        print("값이 존재하지 않음")
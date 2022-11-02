n = int(input())
data = list(map(int, input().split()))
data.sort()
m = int(input())
target_data = list(map(int, input().split()))

def binary_search(data, target, start, end):
    while start <= end:
        mid = (start+end) // 2
        
        if data[mid] == target:
            return mid
        elif data[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return None

for i in target_data:
    result = binary_search(data, i, 0, n-1)
    if result != None:
        print(1)
    else:
        print(0)
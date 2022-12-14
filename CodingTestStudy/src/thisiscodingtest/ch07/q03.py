# n, m = map(int, input().split())

# data = list(map(int, input().split()))


n, m = 4, 6
data = [19, 15, 10, 17]
data.sort()

start = 0
end = max(data)

while start <= end:
    total = 0
    mid = (start+end) // 2
    
    for x in data:
        if x > mid:
            total += x - mid
            
    if total < m:
        end = mid - 1
    else:
        result = mid
        start = mid + 1
        
print(result)

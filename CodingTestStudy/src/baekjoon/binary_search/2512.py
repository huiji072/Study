n = int(input())
data = list(map(int, input().split()))
data.sort()
max_money = int(input())

start = 0
end = data[-1]

while start <= end:
    total = 0
    mid = (start+end) // 2
    
    for x in data:
        if x <= mid:
            total += x
            print(total)
        
    if total < max_money:
        start = mid + 1
    else:
        end = mid - 1   
            
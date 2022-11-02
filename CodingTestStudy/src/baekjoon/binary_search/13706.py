n = int(input())

start = 0
end = n

def binary_search(target, start, end):
    while start <= end:
        mid = (start+end) // 2
        
        if mid**2 == target:
            return mid
        elif mid**2 > target:
            end = mid - 1
        else:
            start = mid + 1
    
for i in range(n):
    result = binary_search(n, 0, n-1)
print(result)
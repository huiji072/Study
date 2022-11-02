n = int(input())
m = int(input())
data = list(map(int, input().split()))

result = 0

for i in range(0, m-1):
    result = max(result, abs(data[i] - data[i+1]))
    
result = max((result+1)//2, data[0], n-data[-1])
print(result)
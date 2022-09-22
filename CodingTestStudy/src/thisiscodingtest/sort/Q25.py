# n = int(input())
# stages = list(map(int, input().split()))

n = 5
stages = [2, 1, 2, 6, 2, 4, 3, 3]
stages.sort()
people = len(stages)
result = []


for i in range(1, n+1):
    result.append((i, stages.count(i)/people))
    people -= stages.count(i)    
        
result = sorted(result, key=lambda r:(-r[1]))
 
print([i[0] for i in result])
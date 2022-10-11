from itertools import combinations


n, m = 8, 5
data = [1, 5, 4, 3, 2, 4, 5, 2]

result = list(combinations(data, 2))

answer = len(result)

for i in range(len(result)):
    if result[i][0] == result [i][1]:
        answer -= 1
        
print(answer)

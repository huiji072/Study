'''
모든회원가 친구면 이 회원은 1점
다른 모든 회원이 친구이거나, 친구의 친구면 2점
친구, 친구의 친구, 친구의 친구의 친구 3점
...
 점수가 가장 작으면 회장

target과 거리가 1인수가 최대한 많은것이 회장
'''

from collections import deque
import sys
input = sys.stdin.readline
INF = float('inf')

n = int(input())
dist = [[INF] * (n+1) for _ in range(n+1)]

for i in range(1, n+1):
    dist[i][i] = 0 

while(True):
    a, b = map(int, input().split())
    if a==-1 and b==-1:
        break
    dist[a][b] = 1
    dist[b][a] = 1


for i in range(1, n+1):
    for j in range(1, n+1):
        for k in range(1, n+1):
            if dist[j][k] > dist[j][i] + dist[i][k]:
                dist[j][k] = dist[j][i] + dist[i][k]
                    
                    
result = []
for i in range(1, n+1):
    result.append(max(dist[i][1:]))
    
min_result = min(result)
print(min_result, result.count(min_result))

for i in range(n):
    if result[i] == min_result:
        print(i+1, end=' ')
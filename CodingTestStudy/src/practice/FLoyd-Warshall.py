'''
플로이드 워셜 알고리즘은 모든 정점 사이의 최단 경로를 찾는 탐색 알고리즘

최단 경로는 길이 순으로 구해집니다.

하나의 정점에서 다른 정점으로 바로 갈 수 있으면 최소 비용을,
갈 수 없다면 INF로 배열에 값을 저장합니다.
'''

import sys

INF = sys.maxsize

def Floyd_Warshall():
    # 최단 경로를 담는 배열 초기화
    dist = [[INF] * n for i in range(n)] 
    
    for i in range(n):
        for j in range(n):
            dist[i][j] = a[i][j]
            
    for i in range(n):
        for j in range(n):
            for k in range(n):
                if dist[j][k] > dist[j][i] + dist[i][k]:
                    dist[j][k] = dist[j][i] + dist[i][k]
    return dist

# 정점 수
n = 4

a = [[0, 2, INF, 4], [2, 0, INF, 5], [3, INF, 0, INF], [INF, 2, 1, 0]]

dist = Floyd_Warshall()

for i in range(n):
    for j in range(n):
        print(dist[i][j], end=' ') 
    print()
    
import heapq

'''
다익스트라
모든 거리가 1
start에서 보낸 것을 받는 노드의 총 개수와
총 걸리는 시간 출력
'''


INF = int(1e9)
# 노드, 간선, 시작노드
n, m, start = map(int, input().split())

graph = [[] for i in range(n+1)]
distance = [INF] * (n+1)

for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q:
        dist, now = heapq.heappop(q)

        if distance[now] < dist:
            continue

        for i in graph[now]:
            cost = dist + i[1]

            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

dijkstra(start)

count = 0

max_distance = 0

for d in distance:
    if d != INF:
        count += 1
        max_distance = max(max_distance, d)

print(count-1, max_distance)
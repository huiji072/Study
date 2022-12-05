import heapq

'''
0부터 d까지 가야할 때
간선, d값
시작, 종료, 비용이 주어짐
'''

INF = int(1e9)

m, d = map(int, input().split())
graph = [[] for i in range(d+1)]
distance = [INF] * (d+1)

for i in range(d):
    graph[i].append((i+1, 1))

for _ in range(m):
    a, b, c = map(int, input().split())
    if b > d:
        continue
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

dijkstra(0)

print(distance[d])
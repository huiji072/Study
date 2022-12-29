n, m = map(int, input().split())

j = int(input())

apple = []
for _ in range(j):
    apple.append(int(input()))

# 바구니
start = 1
end = m
dis = 0

for i in range(j):
    if apple[i] <= 0 or apple[i] > n:
        break
    if apple[i] < start:
        dis += start - apple[i]
        start = apple[i]
        end = apple[i]+(m-1)
    if apple[i] > end:
        dis += apple[i] - end
        end = apple[i]
        start = apple[i]-(m-1)

print(dis)
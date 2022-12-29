n, m = map(int, input().split())

temp_a = 1001
temp_b = 1001

for _ in range(m):
    a, b = map(int, input().split())
    temp_a = min(temp_a, a)
    temp_b = min(temp_b, b)

result = 0
# 세트 6개로 나누어떨어지면 그만큼, 아니면 +1
if n % 6 == 0:
    result = n//6
    result *= temp_a
else:
    result = (n//6) + 1
    result *= temp_a

# 개별로만 살 때
result = min(result, temp_b * n)

# 섞어살 때
result = min(result, ((n//6)*temp_a) + ((n%6) * temp_b))

print(result)
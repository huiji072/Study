n = int(input())

coin = [5, 2]

result = 0
for c in coin:
    result += n//c
    n = n % c

print(result)
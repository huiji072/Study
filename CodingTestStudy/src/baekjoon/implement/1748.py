# 구현4

n = input()

n_len = len(n) - 1

result = 0
for i in range(n_len):
    result += 9 * 10 ** i * (i+1)

result += (int(n) -  (10 ** n_len) + 1) * (n_len+1)
print(result)
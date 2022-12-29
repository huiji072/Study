n = list(input())
n.sort(reverse=True)

sum = 0
for i in n:
    sum += int(i)

# 끝자리가 0이어야 함
# 3으로 난어떨어져야 함
if '0' not in n or sum % 3 != 0:
    print(-1)
else:
    print("".join(n))
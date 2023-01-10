a, b = map(int, input().split())

cnt = 0
while True:
    if a == b:
        print(cnt)
        break
    if b % 2 == 0:
        if b//2 < a:
            b -= 1
        else:
            b //= 2
        cnt += 1
    else:
        b -= 1
        cnt += 1

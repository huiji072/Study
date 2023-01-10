a, b = map(int, input().split())

cnt = 0
while True:
    if a > b:
        print(-1)
        break
    if a == b:
        print(cnt+1)
        break

    is_one = list(map(int, str(b)))
    if is_one[-1] == 1:
        is_one.pop()
        temp = "".join(map(str, is_one))
        b = int(temp)
    else:
        if b % 2 != 0:
            print(-1)
            break
        else:
            b //= 2
    cnt += 1


# m = list(map(int, str(n)))
# m.pop()
# k = "".join(map(str, m))

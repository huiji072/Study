a, b = map(int, input().split())



count = 0
for i in range(b):
    b_list = list(map(int, str(b)))
    if a > b:
        print(-1)
        break
    if a == b:
        print(count+1)
        break
    if b_list[-1] == 1:
        b_list.pop()
        temp = ''.join(map(str, b_list))
        b = int(temp)
        count += 1
    else:
        if b % 2 == 0:
            b = b//2
            count += 1
        else:
            print(-1)
            break

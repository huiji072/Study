x = int(input())

count = 0
while x>1:
    if x % 5 == 0:
        x /= 5
    elif x % 3 == 0:
        x /= 3
    elif x % 2 == 0:
        x /= 2
    else:
        x -= 1
    count += 1
print(count)


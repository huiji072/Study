s = 123402
s2 = 7755

data = list(map(int, str(s2)))

size = len(data)

left = sum(data[0:size//2])
right = sum(data[size//2:size])

if left == right:
    print("LUCKY")
else:
    print("READY")
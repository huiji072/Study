s = "0001100"

data = []

for i in s:
    data.append(int(i))

result = 0

for i in range(1, len(data)):
    if data[i] != data[i-1]:
        result += 1

print(result-1)
        
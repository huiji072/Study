n = 5
data = [2, 3, 1, 2, 2]

data = sorted(data)

group = 0
person = 0

for i in data:
    person += 1
    if i <= person:
        group += 1
        person = 0
print(group)
n = 5
data = [2, 3, 1, 2, 2]

data = sorted(data)

person = 0
group = 0

for i in data:
    person += 1
    if person >= i:
        group += 1
        person = 0
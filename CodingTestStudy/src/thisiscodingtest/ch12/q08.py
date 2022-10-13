s = "K1KA5CB7"

data = list(map(str, str(s)))

alpha = []
num = []

for i in data:
    if i.isalpha():
        alpha.append(i)
    elif i.isdigit():
        num.append(int(i))
        
alpha = sorted(alpha)
num = sum(num)

alpha = ''.join(alpha)
result = alpha + str(num)

print(result)
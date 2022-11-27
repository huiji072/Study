k = int(input())

da = [0] * (k+1)
db = [0] * (k+1)

da[0] = 1
db[0] = 0

da[1] = 0
db[1] = 1

for i in range(2, k+1):
    da[i] = db[i-1]
    db[i] = da[i-1] + db[i-1]

print(da[k], db[k])
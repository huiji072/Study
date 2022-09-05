s = input()
slist = list(s)
ilist = list(map(int, slist))
result = ilist[0]

for i in range(1, len(ilist)):
    if ilist[i-1] == 0:
        result += ilist[i]
    else:
        result *= ilist[i]
        
print(result)
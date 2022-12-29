s = input()
arr = list(s)

data = []
data.append(arr[0])
for i in range(1, len(arr)):
    if arr[i-1] == arr[i]:
        continue
    else:
        data.append(arr[i])

print( min( data.count('0'), data.count('1') ) )
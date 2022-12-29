n = input()

arr = list(n)
temp = arr[0]

for i in range(1, len(arr)):
    if arr[i].isupper():
        temp += arr[i]

if temp == "UCPC" and len(temp) == 4:
    print("I love UCPC")
else:
    print("I hate UCPC")
# n = int(input())
# data = list(map(int, input().split()))
# m = int(input())
# wishList = list(map(int, input().split()))

n = 5
data = [8, 3, 7, 9, 2]
m = 3
wishList = [5, 7, 9]
result = []

for wish in wishList:
    if wish in data:
        print("yes", end=' ')
    else:
        print("no", end=' ')

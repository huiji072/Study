n = int(input())

d = [0] * 1001

def pibo(n):
    if n == 1 or n == 2:
        return 1
    if d[n] != 0:
        return d[n]
    d[n] = pibo(n-1) + pibo(n-2)
    return d[n]

print(pibo(n))
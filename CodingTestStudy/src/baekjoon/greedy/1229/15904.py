# 반례

import sys
input = sys.stdin.readline

n = input()

temp = ['U', 'C', 'P', 'C']

i = 0
result = 0
for t in temp:
    if t in n:
        n = n[n.find(t)+1:]
    else:
        result = -1

if result == -1:
    print("I hate UCPC")
else:
    print("I love UCPC")
'''
1. 내림차순
2. 각 인덱스에  +1 +2 +3을 구하고 그중 최댓값+1
'''

import sys
input = sys.stdin.readline

n = int(input())

tree = list(map(int, input().split()))

tree.sort(reverse=True)

cnt = 0

for i in range(n):
    tree[i] += i+1
    
print(max(tree)+1)
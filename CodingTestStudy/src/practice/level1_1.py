left = 13
right = 17

def factors(n):
    count = 0
    for i in range(1, right+1):
        if n % i == 0:
            count += 1
    print(count)
    return count

def solution(left, right):
    answer = 0
    
    for i in range(left, right+1):
        if factors(i) % 2 == 0:
            answer += i
        else:
            answer -= i
    
    
    return answer

print(solution(left, right))
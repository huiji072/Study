from itertools import permutations


n = 12
weak = [1, 5, 6, 10]
dist = [1, 2, 3, 4]

def solution(n, weak, dist):
    length = len(weak)
    for i in range(weak):
        weak.append(weak[i] + n)
    answer = len(dist) + 1
    
    for i in range(length):
        for friends in list(permutations(dist, len(dist)))
            count = 1
            position = weak[i] + friends[count-1]
            
            for index in range(i, i + length):
                if position < weak[index]:
                    count += 1
                    if count > len(dist):
                        break
                    position = weak[index] + friends[count-1]
            answer = min(answer, count)
    if answer > len(dist):
        return -1
    return answer
            
    
    
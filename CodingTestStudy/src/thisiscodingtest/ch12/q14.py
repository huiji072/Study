from itertools import permutations


n = 12
weak = [1, 5, 6, 10]
dist = [1, 2, 3, 4]

def solution(n, weak, dist):
    length = len(weak)
    for i in range(length):
        weak.append(weak[i] + n)
    answer = len(dist) + 1 #친구 수를 최소로 하기 위해 max+1
    
    for start in range(length):
        # 친구를 나열하는 모든 경우의 수
        for friends in list(permutations(dist, len(dist))):
            count = 1 #투입할 친구의 수
            #해당 친구가 점검할 수 있는 마지막 위치
            position = weak[start] + friends[count - 1]
            # 시작점부터 모든 취약 지점을 확인
            for index in range(start, start + length):
                # 점검 위치를 벗어나는 경우
                if position < weak[index]:
                    count += 1 #새로운 친구 투입
                    if count > len(dist): #투입이 더 불가능하다면 종료
                        break
                    position = weak[index] + friends[count-1]
            answer = min(answer, count)
    if answer > len(dist):
            return -1
    return answer

print(solution(n, weak, dist))